import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@strapi/parts/ThemeProvider';
import { lightTheme } from '@strapi/parts/themes';
import { Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import * as yup from 'yup';
import { createMemoryHistory } from 'history';
import BaseLogin from '../BaseLogin';

describe('ADMIN | PAGES | AUTH | BaseLogin', () => {
  it('should render and match the snapshot', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <IntlProvider locale="en" messages={{}} defaultLocale="en" textComponent="span">
        <ThemeProvider theme={lightTheme}>
          <Router history={history}>
            <BaseLogin onSubmit={() => {}} schema={yup.object()} />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c8 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c11 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #666687;
      }

      .c16 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c24 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c33 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #4945ff;
      }

      .c36 {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c12 {
        font-size: 1rem;
        line-height: 1.5;
      }

      .c34 {
        font-weight: 600;
        line-height: 1.14;
      }

      .c35 {
        font-weight: 600;
        font-size: 0.6875rem;
        line-height: 1.45;
        text-transform: uppercase;
      }

      .c2 {
        background: #ffffff;
        padding-top: 48px;
        padding-right: 56px;
        padding-bottom: 48px;
        padding-left: 56px;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c7 {
        padding-top: 24px;
        padding-bottom: 4px;
      }

      .c9 {
        padding-bottom: 32px;
      }

      .c21 {
        padding-right: 12px;
        padding-left: 8px;
      }

      .c27 {
        padding-left: 8px;
      }

      .c31 {
        padding-top: 16px;
      }

      .c4 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c17 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c30 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c28 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
      }

      .c28 svg {
        height: 12px;
        width: 12px;
      }

      .c28 svg > g,
      .c28 svg path {
        fill: #ffffff;
      }

      .c28[aria-disabled='true'] {
        pointer-events: none;
      }

      .c26 {
        margin: 0;
        height: 18px;
        min-width: 18px;
        border-radius: 4px;
        border: 1px solid #c0c0cf;
        -webkit-appearance: none;
        background-color: #ffffff;
      }

      .c26:checked {
        background-color: #4945ff;
        border: 1px solid #4945ff;
      }

      .c26:checked:after {
        content: '';
        display: block;
        position: relative;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=) no-repeat no-repeat center center;
        width: 10px;
        height: 10px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }

      .c26:checked:disabled:after {
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==) no-repeat no-repeat center center;
      }

      .c26:disabled {
        background-color: #dcdce4;
        border: 1px solid #c0c0cf;
      }

      .c26:indeterminate {
        background-color: #4945ff;
        border: 1px solid #4945ff;
      }

      .c26:indeterminate:after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: #ffffff;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }

      .c26:indeterminate:disabled {
        background-color: #dcdce4;
        border: 1px solid #c0c0cf;
      }

      .c26:indeterminate:disabled:after {
        background-color: #8e8ea9;
      }

      .c29 {
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border: 1px solid #4945ff;
        background: #4945ff;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
      }

      .c29 .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c29 .c10 {
        color: #ffffff;
      }

      .c29[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c29[aria-disabled='true'] .c10 {
        color: #666687;
      }

      .c29[aria-disabled='true'] svg > g,
      .c29[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c29[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c29[aria-disabled='true']:active .c10 {
        color: #666687;
      }

      .c29[aria-disabled='true']:active svg > g,
      .c29[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c29:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c29:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c13 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c13 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c13 > * + * {
        margin-top: 24px;
      }

      .c15 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c15 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c15 > * + * {
        margin-top: 4px;
      }

      .c19 {
        border: none;
        border-radius: 4px;
        padding-left: 16px;
        padding-right: 16px;
        color: #32324d;
        font-weight: 400;
        font-size: 0.875rem;
        display: block;
        width: 100%;
        height: 2.5rem;
      }

      .c19::-webkit-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c19::-moz-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c19:-ms-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c19::placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c19:disabled {
        background: inherit;
        color: inherit;
      }

      .c20 {
        border: none;
        border-radius: 4px;
        padding-left: 16px;
        padding-right: 0;
        color: #32324d;
        font-weight: 400;
        font-size: 0.875rem;
        display: block;
        width: 100%;
        height: 2.5rem;
      }

      .c20::-webkit-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c20::-moz-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c20:-ms-input-placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c20::placeholder {
        color: #8e8ea9;
        opacity: 1;
      }

      .c20:disabled {
        background: inherit;
        color: inherit;
      }

      .c18 {
        border: 1px solid #dcdce4;
        border-radius: 4px;
        background: #ffffff;
      }

      .c25 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c25 * {
        cursor: default;
      }

      .c14 textarea {
        height: 5rem;
      }

      .c32 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-transform: uppercase;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c32 svg path {
        fill: #4945ff;
      }

      .c32 svg {
        font-size: 0.625rem;
      }

      .c0 {
        outline: none;
      }

      .c22 {
        border: none;
        background: transparent;
        font-size: 1.6rem;
        width: auto;
        padding: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c3 {
        margin: 0 auto;
        width: 552px;
      }

      .c5 {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c6 {
        height: 4.5rem;
      }

      .c23 svg {
        height: 1rem;
        width: 1rem;
      }

      .c23 svg path {
        fill: #666687;
      }

      <main
        aria-labelledby="main-content-title"
        class="c0"
        id="main-content"
        tabindex="-1"
      >
        <div
          class="c1 c2 c3"
        >
          <form
            action="#"
            novalidate=""
          >
            <div
              class="c1 c4 c5"
            >
              <img
                alt=""
                aria-hidden="true"
                class="c6"
              />
              <div
                class="c1 c7"
              >
                <h1
                  class="c8"
                  id="main-content-title"
                >
                  Welcome back!
                </h1>
              </div>
              <div
                class="c1 c9"
              >
                <span
                  class="c10 c11 c12"
                >
                  Log in to your Strapi account
                </span>
              </div>
            </div>
            <div
              class="c13"
            >
              <div
                class="c14"
              >
                <div>
                  <div
                    class="c15"
                  >
                    <div
                      class="c1 c4"
                    >
                      <label
                        class="c10 c16"
                        for="textinput-1"
                      >
                        Email
                      </label>
                    </div>
                    <div
                      class="c1 c17 c18"
                    >
                      <input
                        aria-invalid="false"
                        class="c19"
                        id="textinput-1"
                        name="email"
                        placeholder="kai@doe.com"
                        required=""
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="c14"
              >
                <div>
                  <div
                    class="c15"
                  >
                    <div
                      class="c1 c4"
                    >
                      <label
                        class="c10 c16"
                        for="textinput-2"
                      >
                        Password
                      </label>
                    </div>
                    <div
                      class="c1 c17 c18"
                    >
                      <input
                        aria-invalid="false"
                        class="c20"
                        id="textinput-2"
                        name="password"
                        required=""
                        type="password"
                        value=""
                      />
                      <div
                        class="c1 c21"
                      >
                        <button
                          aria-label="Hide password"
                          class="c22 c23"
                          type="button"
                        >
                          <svg
                            fill="none"
                            height="1em"
                            viewBox="0 0 24 24"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.048 6.875L2.103 4.93a1 1 0 111.414-1.415l16.966 16.966a1 1 0 11-1.414 1.415l-2.686-2.686a12.247 12.247 0 01-4.383.788c-3.573 0-6.559-1.425-8.962-3.783a15.842 15.842 0 01-2.116-2.568 11.096 11.096 0 01-.711-1.211 1.145 1.145 0 010-.875c.124-.258.36-.68.711-1.211.58-.876 1.283-1.75 2.116-2.569.326-.32.663-.622 1.01-.906zm10.539 10.539l-1.551-1.551a4.005 4.005 0 01-4.9-4.9L6.584 9.411a6 6 0 008.002 8.002zM7.617 4.787A12.248 12.248 0 0112 3.998c3.572 0 6.559 1.426 8.961 3.783a15.845 15.845 0 012.117 2.569c.351.532.587.954.711 1.211.116.242.115.636 0 .875-.124.257-.36.68-.711 1.211-.58.876-1.283 1.75-2.117 2.568-.325.32-.662.623-1.01.907l-2.536-2.537a6 6 0 00-8.002-8.002L7.617 4.787zm3.347 3.347A4.005 4.005 0 0116 11.998c0 .359-.047.706-.136 1.037l-4.9-4.901z"
                              fill="#212134"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="c15"
                >
                  <label
                    class="c10 c24 c25"
                  >
                    <input
                      aria-label="rememberMe"
                      class="c26"
                      id="checkbox-3"
                      name="rememberMe"
                      type="checkbox"
                    />
                    <div
                      class="c1 c27"
                    >
                      Remember me
                    </div>
                  </label>
                </div>
              </div>
              <button
                aria-disabled="false"
                class="c28 c29"
                type="submit"
              >
                <span
                  class="c10 c16"
                >
                  Login
                </span>
              </button>
            </div>
          </form>
        </div>
        <div
          class="c1 c30"
        >
          <div
            class="c1 c31"
          >
            <a
              class="c32"
              href="/auth/forgot-password"
            >
              <span
                class="c10 c33 c34 c35"
              >
                <span
                  class="c10 c36"
                >
                  Forgot your password?
                </span>
              </span>
            </a>
          </div>
        </div>
      </main>
    `);
  });
});