mp.events.onClient('requestVehicleSpawn', (player, modelName) => {
  const vehicle = mp.vehicles.create({
    model: mp.hashes.tweakdbid(modelName),
    appearance: mp.hashes.cname('default'),
    position: player.position,
    yaw: player.yaw,
    health: 5000,
    dimension: player.dimension,
  });

  vehicle.setMeta('ownerId', String(player.id), true);
  mp.events.emitClient(player, 'vehicleSpawned', vehicle.id);
});

mp.events.on('resourceStop', () => {
  for (const vehicle of mp.vehicles.toArray()) {
    if (vehicle.getMeta('ownerId')) vehicle.destroy();
  }
});
