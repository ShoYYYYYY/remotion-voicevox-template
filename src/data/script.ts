import { CharacterId } from "../config";

// アニメーションの型定義
export type AnimationType = "none" | "fadeIn" | "slideUp" | "slideLeft" | "zoomIn" | "bounce";

// ビジュアルの型定義
export interface VisualContent {
  type: "image" | "text" | "none";
  src?: string;
  text?: string;
  fontSize?: number;
  color?: string;
  animation?: AnimationType;
}

// 効果音の型定義
export interface SoundEffect {
  src: string;
  volume?: number;
}

// BGM設定
export interface BGMConfig {
  src: string;
  volume?: number;
  loop?: boolean;
}

// BGM設定（動画全体で使用）
export const bgmConfig: BGMConfig | null = null;

// セリフデータの型定義
export interface ScriptLine {
  id: number;
  character: CharacterId;
  text: string;
  displayText?: string;
  scene: number;
  voiceFile: string;
  durationInFrames: number;
  pauseAfter: number;
  emotion?: "normal" | "happy" | "surprised" | "thinking" | "sad";
  visual?: VisualContent;
  se?: SoundEffect;
}

// シーン定義
export interface SceneInfo {
  id: number;
  title: string;
  background: string;
}

export const scenes: SceneInfo[] = [
  { id: 1, title: "オープニング", background: "gradient" },
  { id: 2, title: "コーディングエージェントとは", background: "solid" },
  { id: 3, title: "できること", background: "solid" },
  { id: 4, title: "主要ツール", background: "solid" },
  { id: 5, title: "選び方", background: "solid" },
  { id: 6, title: "エンディング", background: "gradient" },
];

// コーディングエージェント概要セリフデータ
export const scriptData: ScriptLine[] = [
  // === オープニング ===
  {
    id: 1,
    character: "zundamon",
    text: "きょうはコーディングエージェントを紹介するのだ！",
    scene: 1,
    pauseAfter: 10,
    visual: {
      type: "text",
      text: "コーディングエージェント\nのすべて",
      fontSize: 72,
      color: "#ffffff",
      animation: "zoomIn"
    },
    voiceFile: "01_zundamon.wav",
    durationInFrames: 120, // 3.32s
  },
  {
    id: 2,
    character: "metan",
    text: "コーディングエージェント？",
    scene: 1,
    pauseAfter: 10,
    voiceFile: "02_metan.wav",
    durationInFrames: 58, // 1.60s
  },
  {
    id: 3,
    character: "zundamon",
    text: "プログラミング作業を手伝ってくれるAIアシスタントなのだ！",
    scene: 1,
    pauseAfter: 15,
    voiceFile: "03_zundamon.wav",
    durationInFrames: 165, // 4.57s
  },
  {
    id: 4,
    character: "metan",
    text: "なるほど、プログラマーみたいに働いてくれるわけね。",
    scene: 1,
    pauseAfter: 10,
    voiceFile: "04_metan.wav",
    durationInFrames: 130, // 3.61s
  },

  // === コーディングエージェントとは ===
  {
    id: 5,
    character: "zundamon",
    text: "そうなのだ！",
    scene: 2,
    pauseAfter: 10,
    visual: {
      type: "text",
      text: "コーディングエージェントとは",
      fontSize: 64,
      color: "#059669",
      animation: "bounce"
    },
    voiceFile: "05_zundamon.wav",
    durationInFrames: 38, // 1.03s
  },
  {
    id: 6,
    character: "zundamon",
    text: "チャットAIと違って、プロジェクト全体のファイルを読んで理解できるのだ！",
    scene: 2,
    pauseAfter: 10,
    voiceFile: "06_zundamon.wav",
    durationInFrames: 209, // 5.79s
  },
  {
    id: 7,
    character: "metan",
    text: "ただアドバイスするだけじゃなくて、実際にコードを書いてくれるの？",
    scene: 2,
    pauseAfter: 10,
    voiceFile: "07_metan.wav",
    durationInFrames: 156, // 4.31s
  },
  {
    id: 8,
    character: "zundamon",
    text: "その通りなのだ！コードの作成、修正、リファクタリングまで全部やってくれるのだ！",
    scene: 2,
    pauseAfter: 10,
    emotion: "happy",
    voiceFile: "08_zundamon.wav",
    durationInFrames: 255, // 7.06s
  },
  {
    id: 9,
    character: "metan",
    text: "すごいわね。",
    scene: 2,
    pauseAfter: 10,
    voiceFile: "09_metan.wav",
    durationInFrames: 34, // 0.94s
  },

  // === できること ===
  {
    id: 10,
    character: "zundamon",
    text: "できることもいろいろあるのだ！",
    scene: 3,
    pauseAfter: 10,
    visual: {
      type: "text",
      text: "できること",
      fontSize: 64,
      color: "#059669",
      animation: "fadeIn"
    },
    voiceFile: "10_zundamon.wav",
    durationInFrames: 77, // 2.13s
  },
  {
    id: 11,
    character: "zundamon",
    text: "コード生成、バグ修正、コード解説、リファクタリング、テスト作成、ドキュメント作成！",
    scene: 3,
    pauseAfter: 10,
    voiceFile: "11_zundamon.wav",
    durationInFrames: 314, // 8.71s
  },
  {
    id: 12,
    character: "metan",
    text: "まるで魔法使いみたいね。",
    scene: 3,
    pauseAfter: 10,
    emotion: "surprised",
    voiceFile: "12_metan.wav",
    durationInFrames: 65, // 1.79s
  },
  {
    id: 13,
    character: "zundamon",
    text: "そうなのだ！非エンジニアでも簡単なスクリプトやツールを作れるようになるのだ！",
    scene: 3,
    pauseAfter: 10,
    voiceFile: "13_zundamon.wav",
    durationInFrames: 216, // 5.99s
  },
  {
    id: 14,
    character: "metan",
    text: "生産性も上がりそうね。",
    scene: 3,
    pauseAfter: 10,
    voiceFile: "14_metan.wav",
    durationInFrames: 68, // 1.88s
  },

  // === 主要ツール ===
  {
    id: 15,
    character: "zundamon",
    text: "主要なツールも紹介するのだ！",
    scene: 4,
    pauseAfter: 10,
    visual: {
      type: "text",
      text: "主要なツール",
      fontSize: 64,
      color: "#059669",
      animation: "slideUp"
    },
    voiceFile: "15_zundamon.wav",
    durationInFrames: 90, // 2.50s
  },
  {
    id: 16,
    character: "zundamon",
    text: "まずはクロードコード！Anthropicが提供するツールで、企業向けの安全機能が充実しているのだ！",
    scene: 4,
    pauseAfter: 10,
    voiceFile: "16_zundamon.wav",
    durationInFrames: 293, // 8.14s
  },
  {
    id: 17,
    character: "metan",
    text: "企業で使うならこれが良さそうね。",
    scene: 4,
    pauseAfter: 10,
    voiceFile: "17_metan.wav",
    durationInFrames: 83, // 2.29s
  },
  {
    id: 18,
    character: "zundamon",
    text: "次はオープンコード！オープンソースで、75以上のAIに対応しているのだ！",
    scene: 4,
    pauseAfter: 10,
    voiceFile: "18_zundamon.wav",
    durationInFrames: 241, // 6.68s
  },
  {
    id: 19,
    character: "metan",
    text: "いろんなAIを試せるのね。",
    scene: 4,
    pauseAfter: 10,
    voiceFile: "19_metan.wav",
    durationInFrames: 71, // 1.95s
  },
  {
    id: 20,
    character: "zundamon",
    text: "他にも、GitHub Copilot、Cursor、Aiderなどがあるのだ！",
    scene: 4,
    pauseAfter: 10,
    voiceFile: "20_zundamon.wav",
    durationInFrames: 198, // 5.49s
  },

  // === 選び方 ===
  {
    id: 21,
    character: "zundamon",
    text: "どれを選べばいいか迷ったら、これを見るのだ！",
    scene: 5,
    pauseAfter: 10,
    visual: {
      type: "text",
      text: "選び方のポイント",
      fontSize: 64,
      color: "#059669",
      animation: "zoomIn"
    },
    voiceFile: "21_zundamon.wav",
    durationInFrames: 128, // 3.55s
  },
  {
    id: 22,
    character: "zundamon",
    text: "企業で使うならクロードコード！",
    scene: 5,
    pauseAfter: 10,
    voiceFile: "22_zundamon.wav",
    durationInFrames: 87, // 2.40s
  },
  {
    id: 23,
    character: "metan",
    text: "個人でいろんなAIを試したいなら？",
    scene: 5,
    pauseAfter: 10,
    voiceFile: "23_metan.wav",
    durationInFrames: 96, // 2.66s
  },
  {
    id: 24,
    character: "zundamon",
    text: "オープンコードなのだ！",
    scene: 5,
    pauseAfter: 10,
    emotion: "happy",
    voiceFile: "24_zundamon.wav",
    durationInFrames: 60, // 1.64s
  },
  {
    id: 25,
    character: "zundamon",
    text: "VS Codeをずっと使いたいならGitHub Copilot！",
    scene: 5,
    pauseAfter: 10,
    voiceFile: "25_zundamon.wav",
    durationInFrames: 147, // 4.06s
  },

  // === エンディング ===
  {
    id: 26,
    character: "zundamon",
    text: "コーディングエージェントを使えば、誰でも効率的にプログラミングができるようになるのだ！",
    scene: 6,
    pauseAfter: 15,
    visual: {
      type: "text",
      text: "さあ、始めてみよう！",
      fontSize: 72,
      color: "#ffffff",
      animation: "bounce"
    },
    voiceFile: "26_zundamon.wav",
    durationInFrames: 239, // 6.61s
  },
  {
    id: 27,
    character: "metan",
    text: "私も挑戦してみようかな。",
    scene: 6,
    pauseAfter: 10,
    voiceFile: "27_metan.wav",
    durationInFrames: 72, // 1.99s
  },
  {
    id: 28,
    character: "zundamon",
    text: "みんなも使ってみてほしいのだ！",
    scene: 6,
    pauseAfter: 10,
    emotion: "happy",
    voiceFile: "28_zundamon.wav",
    durationInFrames: 86, // 2.37s
  },
  {
    id: 29,
    character: "metan",
    text: "バイバイ〜！",
    scene: 6,
    pauseAfter: 0,
    voiceFile: "29_metan.wav",
    durationInFrames: 25, // 0.68s
  },
  {
    id: 30,
    character: "zundamon",
    text: "バイバイなのだ〜！",
    scene: 6,
    pauseAfter: 60,
    emotion: "happy",
    voiceFile: "30_zundamon.wav",
    durationInFrames: 46, // 1.26s
  },
];

// VOICEVOXスクリプト生成用
export const generateVoicevoxScript = (
  data: ScriptLine[],
  characterSpeakerMap: Record<CharacterId, number>
) => {
  return data.map((line) => ({
    id: line.id,
    character: line.character,
    speakerId: characterSpeakerMap[line.character],
    text: line.text,
    outputFile: line.voiceFile,
  }));
};
