# ================================
# Remotion + VOICEVOX 動画テンプレート
# バックアップスクリプト (Windows PowerShell)
# ================================

# エラー発生時に停止
$ErrorActionPreference = "Stop"

# バックアップ用タイムスタンプ
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = "backups\$timestamp"

# バックアップ対象ファイル
$filesToBackup = @(
    "src\data\script.ts",
    "video-settings.yaml",
    ".env"
)

# バックアップ対象ディレクトリ
$dirsToBackup = @(
    "public\voices"
)

# カレントディレクトリをチェック
if (-not (Test-Item "src\data\script.ts")) {
    Write-Host "エラー: Remotionプロジェクトのルートディレクトリで実行してください" -ForegroundColor Red
    exit 1
}

# バックアップディレクトリ作成
Write-Host "バックアップディレクトリを作成中: $backupDir"
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# ファイルをバックアップ
Write-Host "ファイルをバックアップ中..."
foreach ($file in $filesToBackup) {
    if (Test-Item $file) {
        $destination = Join-Path $backupDir $file
        $destinationDir = Split-Path $destination -Parent
        if (-not (Test-Item $destinationDir)) {
            New-Item -ItemType Directory -Force -Path $destinationDir | Out-Null
        }
        Copy-Item $file -Destination $destination -Force
        Write-Host "  ✓ $file"
    } else {
        Write-Host "  × $file (ファイルが存在しません)" -ForegroundColor Yellow
    }
}

# ディレクトリをバックアップ
Write-Host "ディレクトリをバックアップ中..."
foreach ($dir in $dirsToBackup) {
    if (Test-Item $dir) {
        $destination = Join-Path $backupDir $dir
        $destinationDir = Split-Path $destination -Parent
        if (-not (Test-Item $destinationDir)) {
            New-Item -ItemType Directory -Force -Path $destinationDir | Out-Null
        }
        Copy-Item $dir -Destination $destination -Recurse -Force
        Write-Host "  ✓ $dir"
    } else {
        Write-Host "  × $dir (ディレクトリが存在しません)" -ForegroundColor Yellow
    }
}

# バックアップ情報を保存
$backupInfo = @{
    timestamp = $timestamp
    date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    files = $filesToBackup | Where-Object { Test-Item $_ } | ForEach-Object { $_ }
    directories = $dirsToBackup | Where-Object { Test-Item $_ } | ForEach-Object { $_ }
}
$backupInfo | ConvertTo-Json | Out-File -FilePath "$backupDir\backup-info.json" -Encoding UTF8

Write-Host ""
Write-Host "バックアップ完了!" -ForegroundColor Green
Write-Host "  場所: $backupDir"
Write-Host ""
Write-Host "復元方法:"
Write-Host "  ファイル: Copy-Item '$backupDir\src\data\script.ts' 'src\data\'"
Write-Host "  音声:   Copy-Item '$backupDir\public\voices\*' 'public\voices\' -Recurse"
