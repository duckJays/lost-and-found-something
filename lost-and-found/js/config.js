/* config.js — the settings your backend teammates change.

   mock         true  = demo mode: no server is called, sample data lives in memory only,
                        and a refresh signs you out. Delete js/mock.js once the backend is live.
                false = real mode: every call goes to the API described in js/api.js.
   apiBase      '' = same site (for example Vercel functions at /api/...).
                Otherwise the full address of the API, e.g. 'https://api.example.com'.
   brandName    Text next to the logo.
   schoolEmailDomain  e.g. 'school.edu.ph'. When set, only school-issued emails can register. '' = no check.
   logoUrl      Path to the school logo image. Leave '' to use the built-in tag mark.
   categories   The five standard categories from the Midterm business rules.
   maxPhotoMB   Largest photo a person may pick (it is also shrunk before upload).
   photoMaxDim  Longest side, in pixels, after shrinking. */
window.LF_CONFIG = window.LF_CONFIG || {
  mock: true,
  apiBase: '',
  brandName: 'Lost & Found',
  logoUrl: 'img/logo.png',
  schoolEmailDomain: '',
  categories: ['Electronics', 'Personal Accessories', 'Documents', 'Clothing', 'Others'],
  maxPhotoMB: 5,
  photoMaxDim: 1280
};
