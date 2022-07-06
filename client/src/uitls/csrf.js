import Cookies from 'js-cookie';

export async function csrfFetch(url, options={}) {
  // sets method to GET if there is not one
  options.method = options.methond || "GET";

  // sets headers to an empty object if there are not any
  options.headers = options.headers || {};

  // add in content type and xsrf token
  if (options.method.toUpperCase() !== "GET") {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
  }

  const result = await window.fetch(url, options);

  if (result.status >= 400) throw result;

  return result;
}

export function restoreCSRF() {
  return csrfFetch('/authentication/csrf/restore');
};