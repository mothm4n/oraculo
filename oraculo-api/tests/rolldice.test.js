import * as rolldice from '../rolldice';

test('main', async () => {
  const event = {"pathParameters" : {"dice" : "2d10" }};
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };

  await rolldice.main(event, context, callback);
});
