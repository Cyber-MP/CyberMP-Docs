mp.events.on('resourceStart', () => {
  const ped = mp.peds.create({
    model: mp.hashes.tweakdbid('Character.CivilianFemaleAverage'),
    appearance: mp.hashes.cname('default'),
    position: [-1392.6, 1271.5, 123.1],
    yaw: 1,
    health: 5000,
    dimension: 0,
  });

  ped.setMeta('npcId', 1, true);
  ped.setMeta('npcName', 'Demo', true);
});

mp.events.on('resourceStop', () => {
  for (const ped of mp.peds.toArray()) {
    if (ped.getMeta('npcId') != null) ped.destroy(); // missing meta is null
  }
});
