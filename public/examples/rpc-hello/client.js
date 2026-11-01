import { RpcClient } from '@cybermp/rpc-client';

const rpc = new RpcClient({ name: 'hello' });

rpc.on('welcome', (ctx) => {
  console.log('welcome', ctx.data);
});

mp.commands.add('ping', async () => {
  const result = await rpc.callServer('ping-call', { testData: 5 });
  console.log(result);
});
