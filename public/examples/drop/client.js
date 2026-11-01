mp.commands.add('drop', () => {
  mp.events.emitServer('requestDrop');
});

mp.events.on('objectStreamIn', (netID, gameID) => {
  console.log('drop in range', netID, gameID, mp.meta.getEntityMeta(netID, 'dropId'));
});
