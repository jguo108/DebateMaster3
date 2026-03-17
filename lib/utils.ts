import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MOCK_USER = {
  id: 'user-1',
  username: 'Pro Debater',
  email: 'chairmanguo@gmail.com',
  rank: 'Super Debater ★',
  level: 'Level 12 Scholar',
  points: 12450,
  winStreak: 5,
  debatesDone: 42,
  winRate: '88%',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ3_ig0nYFmhwIvquxXIcTabCgWn-ECSPVcTNiYvp3R-zU-yDiVH3Zwoqp1ipXxUhA8cwDOq2_fid3SpNHPfDqDc_7Hdc-LhZmNd5WGUlTkecQwKg7dC5XrU63dXutjp3F2D2t9PyOF8N13JjBPnhuQBqa30xAx-ot4Az6AvUBZ2HBb8aofQHbMunlHsFESdse7Ql9z45UxyJtXCiS9YXv0SGT9k9i9c7e5BHavtk5VgPPo8N8GLXUE6jMpJaumYMewUXPnmh-uiw'
};

export const MOCK_FRIENDS = [
  { id: 'f1', name: 'Felix', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKr1Wr7by2vFIka_OkXHRgT9ldwx3JzgaxYYW8B-Azwiy7yOjpvRuweU5N0YL7-2wHyQsUBl5DoCCQB9NxOyOakdCXsXct3zt5TvwSPt16f36F59rha3iZDz1WcD7XpexCQWCrd4QEyyZjtbR5V6VjJQdh_8Edpy8FHqVObthjlsxTSRL07uqJA3LafaG-t7IBEKYq8Hj9aGVA6891I0n_RrGKZLPmYTmw1Decw9ouDb63J5sJgNtfcKrGxbbldFpfB1wa4FjrxU', online: true },
  { id: 'f2', name: 'Aria', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT2Q3YzStg4ArnvMvAvJ20x1SdoeZiqaVMaupsmlk2R2hnmg2SKpF5SbImDUdbRuReGwMrxRVGK1G7SCXDJao7WVZP2xhSIiGnuZ7nIdr7dTMSQmeZoadabOuo_Z38GY6D4V0oApfzH8WvsuX0fcLgCJ-VCstB6EqZ0VUaOrL_rvR87R3blBRVWkjZUf0rMkOwg6W_pazoGEmvQZZEB2mheRM6RI6NZsnu53wOXGdvAeGH65TSWnnE4-lzTiWYkEfsKJMSTzf9awo', online: true },
  { id: 'f3', name: 'Leo', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ77Cb9vIoBVT26CEzWw0s233wBp6bc0U4td77GNZyygwvarit8pcda28j0xG0Jrmvbu3Vo_0wAy6seIis3neKf4V1LYQBVpFp0I2MTHaqxZciCAILTSd65PYK5ZcLsBM8YA5tb43MdwKeoemd3YXdYokEyZcbZFusKjJ3ERQBhh1x4jfaQj9eI_70c8lhGCDvGzsq4D8dZHdKFwglaxQNhFKa9GN5nS8QxtegU_0MB2Ttvq-naYJHal4FavMuCuIkCsEIPYw9tg4', online: false, lastSeen: '2h ago' },
  { id: 'f4', name: 'Zoe', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlcEF-UEYq9dmNJZOilsJgVzBcp5UsmQoLZ30boDGy8HztCF6qwZ3qRQRydW6Rk9-BGOjI3Ibq2xuSz70kPjZkg3K1xg5Pea5hwstqI1lQ4gRxg2mMy0lSidzEw0O8VlFQxJUkUMDd71vCA9pKD7vWhTajNuywh2a0MVvt-WIP9X1K78xEAWg9Hu9n_WmcMPCBVWAAs7LpkpTk594A5b_5RqPTLmDbhESOgnzCyW3BgUzgx4mtdPj2RLn1KVFO55HPu225GQKulBc', online: true },
  { id: 'f5', name: 'Sophie', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt9z2kZXxz8Sf6qtp_W-uEz7M20BH1AUzHM6kh6hWKmdRkFzNDavlh7fCYqdT0uuwNPF7YhLXySFM5CFuVLNtnyuU0qHy4NIO-YPsU4LF4n-8pzVkC5VYf6KwKzfnC8eNs3z7beQByZbFu2e8fR9h0G0BcKJ5u0xl7ZsvsPAjfWGXZFF2SdTyS7X4BylUIvXqte6hhV4EMjCae4PftU9SGxsRqUCNkug0-MOSUNgem_8cfkG5YqSdjO-4eGt_ESNYNaaPBv_5N_KA', online: true },
  { id: 'f6', name: 'Marcus', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLKchIL6G6suwgwhtP83AMCTMccMzj7FrlMSPG9vImafU5WRGG2gg5NSHJAOg65-Hl8HWf1gFjkWQjLgwfgbwpgtyWJelrDDMPWg9SvrGbwVN58T13fYnuUHuhwaF06HCAHoHQbwTLbEDWqQ7xn8B1PqjEorn9RJaBLSeVLKRHRX77m8saNDF-CJhoSWl9dfaQ4iw28Tx6dJgXIMvkLaPowerDYMV-D8rVNu3dqJijy03TSc-gN6RWHg24zhOyyoUpxJVtvGlsFvI', online: false, lastSeen: '1h ago' },
  { id: 'f7', name: 'Jamie', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKk71Fmd0ptRKaV5s5JD9Wc7cXX2LFJ2Frj9TF_U7lKOtFWy9xLF9kSaCfWHMK1ozIrjWld1eLp5JPquMUrPPxNN1OvobNt7GqCFasA2A1Zju3PArk4gusMdG5qaQs9h6GvAXPIH9WxdyYWj13HZE2KjpgBxKMnaPOz_XU4I7kwnDBycFLXzdgf96D4Ftw0vxwn9lN1rkrV2XIJBq-ayu-GLTGqDKKY4gjKi4ute_pXDbjgWAkZxWP-PWx-WwrXM4CSEN0GpKQx8Y', online: true },
];

export const MOCK_DEBATES = [
  {
    id: 'd1',
    topic: 'Should homework be replaced with video games?',
    opponent: 'Alex Pro',
    opponentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg5WUZo-T3d02IgfApXY7HseM_oOti3TbRVymuGiSvOz5bL6EmP3BuWAEQWgt4LEZfGavBQ5-6WjeAvJws40UB9rrGuonb8YY_pgDLVafmkKAlINZA11MEkE3CeQ_TDj3c36XkJ1tVpDQcYaiQ0jDEnW8t93m23BirmXE4kzxu1wxF19jDMODdRBkq2Owc3E7QnwC-FoUEiaP4b2UEg-Qmkf8to4Mlk7Vek2jG49f2xV4wLCZK2Y7MtwBgAlPBPAuPwgRm4009Dso',
    status: 'active',
    timeRemaining: '02:45',
    category: 'Education'
  },
  {
    id: 'd2',
    topic: 'Climate Change vs. Economy',
    opponent: 'Leo',
    opponentAvatar: MOCK_FRIENDS[2].avatar,
    status: 'scheduled',
    time: 'Thursday, 4:00 PM',
    category: 'Environment',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFKQ8ja3y6IgJiGm-YMKADjKIXHZEKV1y-eQuD91IejKUbjM6pcZXwQdT2nBVzIRXXBYJb8usC20qsarXfgPeG0CeDMIbPMiDIkQJfmKYnOlEb4jUKAN4Po979M-SMe0Oxv2PHNAB82mwTDaCycekyOZt6Tdvoz7QhXbBH874oPkh2vP4EPQvu38IiqjhUXs-1CVD7JCup7RpIon-0l-5fOjpRMVmdMCv2RidG56a84avQVJyCaHhzjmx0o9XVOX4FKINLUk2uqVg'
  },
  {
    id: 'd3',
    topic: 'AI in Elementary Schools',
    opponent: 'Maya',
    opponentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr4faittLMkZ16mOM37marZ2QEReWr_QA36iynwn7Y7hqCg80V-OotOMtonyahtAaA1BhAn8zi6FR8gpW0R5tZRgF3rEF_uOcYjZ323YRX3LjBB2qEtqidlHS6tpU9UP8_Sg3kt6UW6DyWBKT9Dnm2veg0QaqR-X7ubxQO6RbgvuRmCPYdVgaLDjeOulYH9xa6Q3p8a2GzKFx8MHsx2gZnH1-4nsgub5QaNXu8N9hM5iZefyMq0Tg_3vuQR7HV6qc_omh-rjI90s0',
    status: 'scheduled',
    time: 'Friday, 5:30 PM',
    category: 'Technology',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr4faittLMkZ16mOM37marZ2QEReWr_QA36iynwn7Y7hqCg80V-OotOMtonyahtAaA1BhAn8zi6FR8gpW0R5tZRgF3rEF_uOcYjZ323YRX3LjBB2qEtqidlHS6tpU9UP8_Sg3kt6UW6DyWBKT9Dnm2veg0QaqR-X7ubxQO6RbgvuRmCPYdVgaLDjeOulYH9xa6Q3p8a2GzKFx8MHsx2gZnH1-4nsgub5QaNXu8N9hM5iZefyMq0Tg_3vuQR7HV6qc_omh-rjI90s0'
  }
];

export const MOCK_HISTORY = [
  {
    id: 'h1',
    topic: 'The Ethics of Artificial General Intelligence',
    opponent: 'Dr. Aris Thorne',
    date: 'Oct 12, 2023',
    result: 'win',
    score: '88/100',
    feedback: "Participant B demonstrated superior logical consistency and effectively countered the 'biological essentialism' argument presented by Participant A. While both speakers showed excellent rhetorical skills, Participant B's use of recent legal precedents in digital rights provided a decisive edge in the closing statement.",
    transcript: [
      { speaker: 'Participant A', part: 'Opening', text: "Personhood is fundamentally linked to biological sentience and the capacity for suffering. An algorithm, no matter how complex, lacks the neural architecture for true empathy..." },
      { speaker: 'Participant B', part: 'Rebuttal', text: "My opponent relies on a carbon-chauvinist perspective. If we define personhood by the ability to process information, hold values, and interact socially, advanced AI already meets these functional criteria..." },
      { speaker: 'Participant A', part: 'Argument 2', text: "But legal accountability requires a physical entity that can be held liable. How do you punish a cloud-based neural net? This creates a massive legal loophole..." }
    ]
  },
  {
    id: 'h2',
    topic: 'Universal Basic Income Implementation',
    opponent: 'Sarah Jenkins, Econ PhD',
    date: 'Oct 08, 2023',
    result: 'loss',
    score: '72/100'
  },
  {
    id: 'h3',
    topic: 'Mars Colonization vs. Earth Restoration',
    opponent: 'Astro_Neil',
    date: 'Oct 05, 2023',
    result: 'tie',
    score: '80/100'
  }
];
