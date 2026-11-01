mp.events.on('pedStreamIn', (netID, gameID) => {
  const name = mp.meta.getEntityMeta(netID, 'npcName');
  console.log('npc in range', netID, gameID, name);
});
