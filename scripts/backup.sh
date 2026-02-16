#!/bin/bash
# ================================
# Remotion + VOICEVOX 動画テンプレート
# バックアップスクリプト (macOS/Linux)
# ================================

set -e  # エラー発生時に停止

# バックアップ用タイムスタンプ
timestamp=$(date +"%Y%m%d_%H%M%S")
backup_dir="backups/$timestamp"

# バックアップ対象ファイル
files_to_backup=(
    "src/data/script.ts"
    "video-settings.yaml"
    ".env"
)

# バックアップ対象ディレクトリ
dirs_to_backup=(
    "public/voices"
)

# カレントディレクトリをチェック
if [ ! -f "src/data/script.ts" ]; then
    echo "エラー: Remotionプロジェクトのルートディレクトリで実行してください"
    exit 1
fi

# バックアップディレクトリ作成
echo "バックアップディレクトリを作成中: $backup_dir"
mkdir -p "$backup_dir"

# ファイルをバックアップ
echo "ファイルをバックアップ中..."
for file in "${files_to_backup[@]}"; do
    if [ -f "$file" ]; then
        dest_dir="$backup_dir/$(dirname "$file")"
        mkdir -p "$dest_dir"
        cp "$file" "$dest_dir/"
        echo "  ✓ $file"
    else
        echo "  × $file (ファイルが存在しません)"
    fi
done

# ディレクトリをバックアップ
echo "ディレクトリをバックアップ中..."
for dir in "${dirs_to_backup[@]}"; do
    if [ -d "$dir" ]; then
        dest_dir="$backup_dir/$(dirname "$dir")"
        mkdir -p "$dest_dir"
        cp -r "$dir" "$dest_dir/"
        echo "  ✓ $dir"
    else
        echo "  × $dir (ディレクトリが存在しません)"
    fi
done

# バックアップ情報を保存
cat > "$backup_dir/backup-info.json" <<EOF
{
  "timestamp": "$timestamp",
  "date": "$(date +"%Y-%m-%d %H:%M:%S")",
  "files": [
    $(for file in "${files_to_backup[@]}"; do
        [ -f "$file" ] && echo "    \"$file\"" || true
    done | sed '$ ! s/$/,/')
  ],
  "directories": [
    $(for dir in "${dirs_to_backup[@]}"; do
        [ -d "$dir" ] && echo "    \"$dir\"" || true
    done | sed '$ ! s/$/,/')
  ]
}
EOF

echo ""
echo "バックアップ完了! ✓"
echo "  場所: $backup_dir"
echo ""
echo "復元方法:"
echo "  ファイル: cp $backup_dir/src/data/script.ts src/data/"
echo "  音声:   cp -r $backup_dir/public/voices/* public/voices/"
