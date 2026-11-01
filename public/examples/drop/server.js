const GATE = mp.hashes.resref(
  'base\\gameplay\\devices\\doors\\gates\\appearances\\w300_h250_mall_metal.ent',
);

mp.events.onClient('requestDrop', (player) => {
  const [x, y, z] = player.position;

  const object = mp.objects.create({
    model: GATE,
    position: [x, y + 0.5, z],
    yaw: player.yaw,
    dimension: player.dimension,
    dynamic: false,
  });

  object.setMeta('dropId', String(object.id), true);
});

mp.events.on('resourceStop', () => {
  for (const object of mp.objects.toArray()) {
    if (object.getMeta('dropId')) object.destroy();
  }
});
