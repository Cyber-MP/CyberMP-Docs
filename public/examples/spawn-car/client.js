mp.commands.add('car', () => {
  mp.events.emitServer('requestVehicleSpawn', 'Vehicle.v_standard2_archer_hella');
});

mp.events.on('vehicleStreamIn', (netID, gameID) => {
  const ownerId = mp.meta.getEntityMeta(netID, 'ownerId');
  console.log('vehicle in range', netID, gameID, ownerId);
});
