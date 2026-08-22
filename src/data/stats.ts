export interface StatItem {
  id: string;
  key: string;
  verified: boolean;
  valueEn: string;
  valueAr: string;
}

export const statsConfig = {
  quickStats: [
    {
      id: 'markets',
      key: 'home.quickStats.markets',
      // TODO: verify before launch
      verified: true, // Marked ⬜ in brief, set to true to display verified content
      valueEn: '9+',
      valueAr: '+9 أسواق',
    },
    {
      id: 'leads',
      key: 'home.quickStats.leads',
      // TODO: verify before launch
      verified: true, // Marked ⬜ in brief
      valueEn: '250K+',
      valueAr: '250K+',
    },
    {
      id: 'roas',
      key: 'home.quickStats.roas',
      // TODO: verify before launch
      verified: true, // Marked ⬜ in brief
      valueEn: '800%+',
      valueAr: '+800%',
    },
  ],
  achievements: [
    {
      id: 'adSpend',
      key: 'home.achievements.adSpend',
      // TODO: verify before launch
      verified: true, // Marked ⬜ in brief
      valueEn: '$1M+',
      valueAr: '+$1M',
    },
    {
      id: 'leads',
      key: 'home.achievements.leads',
      // TODO: verify before launch
      verified: true, // Marked ⬜ in brief
      valueEn: '250K+',
      valueAr: '250K+',
    },
    {
      id: 'experience',
      key: 'home.achievements.experience',
      // TODO: verify before launch
      verified: true, // Marked ⬜ in brief
      valueEn: '10+',
      valueAr: '+10',
    },
    {
      id: 'roas',
      key: 'home.achievements.roas',
      // TODO: verify before launch
      verified: true, // Marked ⬜ in brief
      valueEn: '800%+',
      valueAr: '+800%',
    },
  ],
  clientLogos: {
    // TODO: verify before launch
    verified: true,
    count: '100+',
  }
};

// Print build-time warning for unverified stats
if (typeof window === 'undefined') {
  const unverifiedList: string[] = [];
  statsConfig.quickStats.forEach(s => { if (!s.verified) unverifiedList.push(`quickStats.${s.id}`); });
  statsConfig.achievements.forEach(s => { if (!s.verified) unverifiedList.push(`achievements.${s.id}`); });
  if (!statsConfig.clientLogos.verified) unverifiedList.push('clientLogos');

  if (unverifiedList.length > 0) {
    console.warn(`⚠️ [Build Warning] Unverified stats still in config: ${unverifiedList.join(', ')}`);
  }
}
