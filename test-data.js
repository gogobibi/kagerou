// Inject mock combat data into kagerou overlay for color testing
// Usage: open browser console on overlay page and paste this, or load via script tag

;(function() {
  const mockData = {
    isActive: true,
    Encounter: {
      title: 'Anabaseios: The Twelfth Circle (Savage)',
      CurrentZoneName: 'Anabaseios: The Twelfth Circle (Savage)',
      hits: 999,
      damage: 8500000,
      DURATION: 360,
      duration: '06:00',
      encdps: 23611,
      enchps: 9500,
      healed: 3420000
    },
    Combatant: {
      'YOU': {
        name: 'YOU', Job: 'DRG', encdps: '4521.3', damage: 1627668, 'damage%': '19%',
        swings: 890, misses: 5, crithit: 310, DirectHitCount: 250, CritDirectHitCount: 180,
        damagetaken: 120000, healed: 5000, enchps: '13.9', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Stardiver-42000', maxhitdamage: 42000, 'damage%': '19'
      },
      'Haurchefant S.': {
        name: 'Haurchefant S.', Job: 'PLD', encdps: '2100.5', damage: 756180, 'damage%': '9%',
        swings: 600, misses: 2, crithit: 150, DirectHitCount: 120, CritDirectHitCount: 80,
        damagetaken: 890000, healed: 45000, enchps: '125.0', OverHealPct: '10%',
        DURATION: 360, deaths: 0, maxhit: 'Requiescat-18000', maxhitdamage: 18000, 'damage%': '9'
      },
      'Estinien W.': {
        name: 'Estinien W.', Job: 'WAR', encdps: '2350.8', damage: 846288, 'damage%': '10%',
        swings: 650, misses: 3, crithit: 180, DirectHitCount: 140, CritDirectHitCount: 95,
        damagetaken: 950000, healed: 30000, enchps: '83.3', OverHealPct: '5%',
        DURATION: 360, deaths: 0, maxhit: 'Fell Cleave-28000', maxhitdamage: 28000, 'damage%': '10'
      },
      'Fray M.': {
        name: 'Fray M.', Job: 'DRK', encdps: '2200.1', damage: 792036, 'damage%': '9%',
        swings: 620, misses: 2, crithit: 160, DirectHitCount: 130, CritDirectHitCount: 85,
        damagetaken: 920000, healed: 25000, enchps: '69.4', OverHealPct: '8%',
        DURATION: 360, deaths: 0, maxhit: 'Bloodspiller-22000', maxhitdamage: 22000, 'damage%': '9'
      },
      'Thancred W.': {
        name: 'Thancred W.', Job: 'GNB', encdps: '2450.2', damage: 882072, 'damage%': '10%',
        swings: 680, misses: 2, crithit: 190, DirectHitCount: 155, CritDirectHitCount: 100,
        damagetaken: 870000, healed: 20000, enchps: '55.6', OverHealPct: '3%',
        DURATION: 360, deaths: 0, maxhit: 'Blasting Zone-25000', maxhitdamage: 25000, 'damage%': '10'
      },
      'Lyse H.': {
        name: 'Lyse H.', Job: 'MNK', encdps: '4380.7', damage: 1577052, 'damage%': '19%',
        swings: 920, misses: 4, crithit: 300, DirectHitCount: 240, CritDirectHitCount: 170,
        damagetaken: 110000, healed: 3000, enchps: '8.3', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Phantom Rush-38000', maxhitdamage: 38000, 'damage%': '19'
      },
      'Yugiri M.': {
        name: 'Yugiri M.', Job: 'NIN', encdps: '4200.5', damage: 1512180, 'damage%': '18%',
        swings: 850, misses: 3, crithit: 280, DirectHitCount: 230, CritDirectHitCount: 160,
        damagetaken: 105000, healed: 2500, enchps: '6.9', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Hyosho Ranryu-35000', maxhitdamage: 35000, 'damage%': '18'
      },
      'Hien R.': {
        name: 'Hien R.', Job: 'SAM', encdps: '4650.9', damage: 1674324, 'damage%': '20%',
        swings: 800, misses: 2, crithit: 320, DirectHitCount: 260, CritDirectHitCount: 190,
        damagetaken: 95000, healed: 2000, enchps: '5.6', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Midare Setsugekka-45000', maxhitdamage: 45000, 'damage%': '20'
      },
      'Zenos Y.': {
        name: 'Zenos Y.', Job: 'RPR', encdps: '4450.3', damage: 1602108, 'damage%': '19%',
        swings: 870, misses: 3, crithit: 290, DirectHitCount: 245, CritDirectHitCount: 175,
        damagetaken: 100000, healed: 3000, enchps: '8.3', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Communio-40000', maxhitdamage: 40000, 'damage%': '19'
      },
      'Wuk L.': {
        name: 'Wuk L.', Job: 'VPR', encdps: '4300.6', damage: 1548216, 'damage%': '18%',
        swings: 900, misses: 3, crithit: 285, DirectHitCount: 235, CritDirectHitCount: 165,
        damagetaken: 108000, healed: 2800, enchps: '7.8', OverHealPct: '0%',
        DURATION: 360, deaths: 1, maxhit: 'Ouroboros-37000', maxhitdamage: 37000, 'damage%': '18'
      },
      'Bard A.': {
        name: 'Bard A.', Job: 'BRD', encdps: '3800.4', damage: 1368144, 'damage%': '16%',
        swings: 780, misses: 4, crithit: 250, DirectHitCount: 200, CritDirectHitCount: 140,
        damagetaken: 90000, healed: 4000, enchps: '11.1', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Apex Arrow-30000', maxhitdamage: 30000, 'damage%': '16'
      },
      'Stephanivien H.': {
        name: 'Stephanivien H.', Job: 'MCH', encdps: '3950.2', damage: 1422072, 'damage%': '17%',
        swings: 810, misses: 3, crithit: 260, DirectHitCount: 210, CritDirectHitCount: 150,
        damagetaken: 85000, healed: 2000, enchps: '5.6', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Wildfire-32000', maxhitdamage: 32000, 'damage%': '17'
      },
      'Nashmeira A.': {
        name: 'Nashmeira A.', Job: 'DNC', encdps: '3600.8', damage: 1296288, 'damage%': '15%',
        swings: 750, misses: 5, crithit: 230, DirectHitCount: 190, CritDirectHitCount: 130,
        damagetaken: 88000, healed: 6000, enchps: '16.7', OverHealPct: '5%',
        DURATION: 360, deaths: 0, maxhit: 'Technical Finish-28000', maxhitdamage: 28000, 'damage%': '15'
      },
      'Shantotto S.': {
        name: 'Shantotto S.', Job: 'BLM', encdps: '4700.1', damage: 1692036, 'damage%': '20%',
        swings: 400, misses: 1, crithit: 150, DirectHitCount: 120, CritDirectHitCount: 90,
        damagetaken: 130000, healed: 1000, enchps: '2.8', OverHealPct: '0%',
        DURATION: 360, deaths: 1, maxhit: 'Flare Star-50000', maxhitdamage: 50000, 'damage%': '20'
      },
      'Alphinaud L.': {
        name: 'Alphinaud L.', Job: 'SMN', encdps: '4100.5', damage: 1476180, 'damage%': '17%',
        swings: 500, misses: 2, crithit: 180, DirectHitCount: 150, CritDirectHitCount: 100,
        damagetaken: 95000, healed: 8000, enchps: '22.2', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Akh Morn-36000', maxhitdamage: 36000, 'damage%': '17'
      },
      'Alisaie L.': {
        name: 'Alisaie L.', Job: 'RDM', encdps: '4250.3', damage: 1530108, 'damage%': '18%',
        swings: 550, misses: 2, crithit: 200, DirectHitCount: 170, CritDirectHitCount: 110,
        damagetaken: 100000, healed: 15000, enchps: '41.7', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Verholy-34000', maxhitdamage: 34000, 'damage%': '18'
      },
      'Blue M.': {
        name: 'Blue M.', Job: 'BLU', encdps: '3500.0', damage: 1260000, 'damage%': '15%',
        swings: 450, misses: 3, crithit: 160, DirectHitCount: 130, CritDirectHitCount: 85,
        damagetaken: 75000, healed: 5000, enchps: '13.9', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Nightbloom-26000', maxhitdamage: 26000, 'damage%': '15'
      },
      'Krile B.': {
        name: 'Krile B.', Job: 'PCT', encdps: '4400.7', damage: 1584252, 'damage%': '19%',
        swings: 480, misses: 1, crithit: 190, DirectHitCount: 160, CritDirectHitCount: 105,
        damagetaken: 92000, healed: 3000, enchps: '8.3', OverHealPct: '0%',
        DURATION: 360, deaths: 0, maxhit: 'Star Prism-44000', maxhitdamage: 44000, 'damage%': '19'
      },
      'Ryne B.': {
        name: 'Ryne B.', Job: 'WHM', encdps: '1200.5', damage: 432180, 'damage%': '5%',
        swings: 300, misses: 1, crithit: 80, DirectHitCount: 60, CritDirectHitCount: 40,
        damagetaken: 150000, healed: 1200000, enchps: '3333.3', OverHealPct: '25%',
        DURATION: 360, deaths: 0, maxhit: 'Glare III-12000', maxhitdamage: 12000, 'damage%': '5'
      },
      'Alisaie S.': {
        name: 'Alisaie S.', Job: 'SCH', encdps: '1100.2', damage: 396072, 'damage%': '5%',
        swings: 280, misses: 2, crithit: 70, DirectHitCount: 55, CritDirectHitCount: 35,
        damagetaken: 145000, healed: 1100000, enchps: '3055.6', OverHealPct: '30%',
        DURATION: 360, deaths: 0, maxhit: 'Broil IV-10000', maxhitdamage: 10000, 'damage%': '5'
      },
      'Urianger A.': {
        name: 'Urianger A.', Job: 'AST', encdps: '1050.8', damage: 378288, 'damage%': '4%',
        swings: 270, misses: 1, crithit: 65, DirectHitCount: 50, CritDirectHitCount: 30,
        damagetaken: 140000, healed: 1150000, enchps: '3194.4', OverHealPct: '28%',
        DURATION: 360, deaths: 0, maxhit: 'Fall Malefic-9500', maxhitdamage: 9500, 'damage%': '4'
      },
      'Sage S.': {
        name: 'Sage S.', Job: 'SGE', encdps: '1150.4', damage: 414144, 'damage%': '5%',
        swings: 290, misses: 1, crithit: 75, DirectHitCount: 58, CritDirectHitCount: 38,
        damagetaken: 148000, healed: 1080000, enchps: '3000.0', OverHealPct: '22%',
        DURATION: 360, deaths: 0, maxhit: 'Dosis III-11000', maxhitdamage: 11000, 'damage%': '5'
      }
    }
  }

  // Dispatch as LegacyLayer event
  const event = new CustomEvent('onOverlayDataUpdate', { detail: mockData })
  document.dispatchEvent(event)

  console.log('Mock data injected! 22 jobs displayed.')
})()
