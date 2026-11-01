import { RpcServer } from '@cybermp/rpc-server';

const rpc = new RpcServer({ name: 'hello' });

rpc.register('ping-call', (ctx) => ctx.data);

mp.events.on('playerConnected', (playerId) => {
  rpc.triggerClient(playerId, 'welcome', { id: playerId });
});
