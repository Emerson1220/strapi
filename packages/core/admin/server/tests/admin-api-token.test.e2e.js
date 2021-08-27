'use strict';

const { createStrapiInstance } = require('../../../../../test/helpers/strapi');
const { createAuthRequest } = require('../../../../../test/helpers/request');

/**
 * == Test Suite Overview ==
 *
 * N°   Description
 * -------------------------------------------
 * 1. Fails to creates an api token (missing parameters from the body)
 * 2. Fails to creates an api token (invalid `type` in the body)
 * 3. Creates an api token (successfully)
 * 4. Creates an api token without a description (successfully)
 */

describe('Admin API Token CRUD (e2e)', () => {
  let rq;
  let strapi;

  // Initialization Actions
  beforeAll(async () => {
    strapi = await createStrapiInstance();
    rq = await createAuthRequest({ strapi });
  });

  // Cleanup actions
  afterAll(async () => {
    await strapi.destroy();
  });

  test('1. Fails to creates an api token (missing parameters from the body)', async () => {
    const body = {
      name: 'api-token_tests-name',
      description: 'api-token_tests-description',
    };

    const res = await rq({
      url: '/admin/api-tokens',
      method: 'POST',
      body,
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toMatchObject({
      statusCode: 400,
      error: 'Bad Request',
      message: 'ValidationError',
      data: {
        type: ['type is a required field'],
      },
    });
  });

  test('2. Fails to creates an api token (invalid `type` in the body)', async () => {
    const body = {
      name: 'api-token_tests-name',
      description: 'api-token_tests-description',
      type: 'invalid-type',
    };

    const res = await rq({
      url: '/admin/api-tokens',
      method: 'POST',
      body,
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toMatchObject({
      statusCode: 400,
      error: 'Bad Request',
      message: 'ValidationError',
      data: {
        type: ['type must be one of the following values: read-only, full-access'],
      },
    });
  });

  test('3. Creates an api token (successfully)', async () => {
    const body = {
      name: 'api-token_tests-name',
      description: 'api-token_tests-description',
      type: 'read-only',
    };

    const res = await rq({
      url: '/admin/api-tokens',
      method: 'POST',
      body,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.data).toMatchObject({
      accessKey: expect.any(String),
      name: body.name,
      description: body.description,
      type: body.type,
      id: expect.any(Number),
    });
  });

  test('4. Creates an api token without a description (successfully)', async () => {
    const body = {
      name: 'api-token_tests-name-without-description',
      type: 'read-only',
    };

    const res = await rq({
      url: '/admin/api-tokens',
      method: 'POST',
      body,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.data).toMatchObject({
      accessKey: expect.any(String),
      name: body.name,
      description: '',
      type: body.type,
      id: expect.any(Number),
    });
  });
});