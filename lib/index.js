require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nccwpck_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: external "minimatch"
const external_minimatch_namespaceObject = require("minimatch");
;// CONCATENATED MODULE: external "sharp"
const external_sharp_namespaceObject = require("sharp");
var external_sharp_default = /*#__PURE__*/__nccwpck_require__.n(external_sharp_namespaceObject);
;// CONCATENATED MODULE: external "blurhash"
const external_blurhash_namespaceObject = require("blurhash");
;// CONCATENATED MODULE: external "zod"
const external_zod_namespaceObject = require("zod");
;// CONCATENATED MODULE: ./src/algorithms/blurhash.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BlurhashOptionsSchema = external_zod_namespaceObject.z.object({
    width: external_zod_namespaceObject.z.number().optional(),
    height: external_zod_namespaceObject.z.number().optional(),
    componentX: external_zod_namespaceObject.z.number().optional(),
    componentY: external_zod_namespaceObject.z.number().optional(),
});
var imageToBlurhash = function (data, options) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, width, _b, height, _c, componentX, _d, componentY, rawPixels;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = options.width, width = _a === void 0 ? 32 : _a, _b = options.height, height = _b === void 0 ? 32 : _b, _c = options.componentX, componentX = _c === void 0 ? 3 : _c, _d = options.componentY, componentY = _d === void 0 ? 3 : _d;
                return [4 /*yield*/, external_sharp_default()(data)
                        .resize(width, height)
                        .ensureAlpha(1)
                        .raw()
                        .toBuffer()];
            case 1:
                rawPixels = _e.sent();
                return [2 /*return*/, (0,external_blurhash_namespaceObject.encode)(new Uint8ClampedArray(rawPixels), width, height, componentX, componentY)];
        }
    });
}); };

;// CONCATENATED MODULE: ./node_modules/thumbhash/thumbhash.js
/**
 * Encodes an RGBA image to a ThumbHash. RGB should not be premultiplied by A.
 *
 * @param w The width of the input image. Must be ≤100px.
 * @param h The height of the input image. Must be ≤100px.
 * @param rgba The pixels in the input image, row-by-row. Must have w*h*4 elements.
 * @returns The ThumbHash as a Uint8Array.
 */
function rgbaToThumbHash(w, h, rgba) {
  // Encoding an image larger than 100x100 is slow with no benefit
  if (w > 100 || h > 100) throw new Error(`${w}x${h} doesn't fit in 100x100`)
  let { PI, round, max, cos, abs } = Math

  // Determine the average color
  let avg_r = 0, avg_g = 0, avg_b = 0, avg_a = 0
  for (let i = 0, j = 0; i < w * h; i++, j += 4) {
    let alpha = rgba[j + 3] / 255
    avg_r += alpha / 255 * rgba[j]
    avg_g += alpha / 255 * rgba[j + 1]
    avg_b += alpha / 255 * rgba[j + 2]
    avg_a += alpha
  }
  if (avg_a) {
    avg_r /= avg_a
    avg_g /= avg_a
    avg_b /= avg_a
  }

  let hasAlpha = avg_a < w * h
  let l_limit = hasAlpha ? 5 : 7 // Use fewer luminance bits if there's alpha
  let lx = max(1, round(l_limit * w / max(w, h)))
  let ly = max(1, round(l_limit * h / max(w, h)))
  let l = [] // luminance
  let p = [] // yellow - blue
  let q = [] // red - green
  let a = [] // alpha

  // Convert the image from RGBA to LPQA (composite atop the average color)
  for (let i = 0, j = 0; i < w * h; i++, j += 4) {
    let alpha = rgba[j + 3] / 255
    let r = avg_r * (1 - alpha) + alpha / 255 * rgba[j]
    let g = avg_g * (1 - alpha) + alpha / 255 * rgba[j + 1]
    let b = avg_b * (1 - alpha) + alpha / 255 * rgba[j + 2]
    l[i] = (r + g + b) / 3
    p[i] = (r + g) / 2 - b
    q[i] = r - g
    a[i] = alpha
  }

  // Encode using the DCT into DC (constant) and normalized AC (varying) terms
  let encodeChannel = (channel, nx, ny) => {
    let dc = 0, ac = [], scale = 0, fx = []
    for (let cy = 0; cy < ny; cy++) {
      for (let cx = 0; cx * ny < nx * (ny - cy); cx++) {
        let f = 0
        for (let x = 0; x < w; x++)
          fx[x] = cos(PI / w * cx * (x + 0.5))
        for (let y = 0; y < h; y++)
          for (let x = 0, fy = cos(PI / h * cy * (y + 0.5)); x < w; x++)
            f += channel[x + y * w] * fx[x] * fy
        f /= w * h
        if (cx || cy) {
          ac.push(f)
          scale = max(scale, abs(f))
        } else {
          dc = f
        }
      }
    }
    if (scale)
      for (let i = 0; i < ac.length; i++)
        ac[i] = 0.5 + 0.5 / scale * ac[i]
    return [dc, ac, scale]
  }
  let [l_dc, l_ac, l_scale] = encodeChannel(l, max(3, lx), max(3, ly))
  let [p_dc, p_ac, p_scale] = encodeChannel(p, 3, 3)
  let [q_dc, q_ac, q_scale] = encodeChannel(q, 3, 3)
  let [a_dc, a_ac, a_scale] = hasAlpha ? encodeChannel(a, 5, 5) : []

  // Write the constants
  let isLandscape = w > h
  let header24 = round(63 * l_dc) | (round(31.5 + 31.5 * p_dc) << 6) | (round(31.5 + 31.5 * q_dc) << 12) | (round(31 * l_scale) << 18) | (hasAlpha << 23)
  let header16 = (isLandscape ? ly : lx) | (round(63 * p_scale) << 3) | (round(63 * q_scale) << 9) | (isLandscape << 15)
  let hash = [header24 & 255, (header24 >> 8) & 255, header24 >> 16, header16 & 255, header16 >> 8]
  let ac_start = hasAlpha ? 6 : 5
  let ac_index = 0
  if (hasAlpha) hash.push(round(15 * a_dc) | (round(15 * a_scale) << 4))

  // Write the varying factors
  for (let ac of hasAlpha ? [l_ac, p_ac, q_ac, a_ac] : [l_ac, p_ac, q_ac])
    for (let f of ac)
      hash[ac_start + (ac_index >> 1)] |= round(15 * f) << ((ac_index++ & 1) << 2)
  return new Uint8Array(hash)
}

/**
 * Decodes a ThumbHash to an RGBA image. RGB is not be premultiplied by A.
 *
 * @param hash The bytes of the ThumbHash.
 * @returns The width, height, and pixels of the rendered placeholder image.
 */
function thumbHashToRGBA(hash) {
  let { PI, min, max, cos, round } = Math

  // Read the constants
  let header24 = hash[0] | (hash[1] << 8) | (hash[2] << 16)
  let header16 = hash[3] | (hash[4] << 8)
  let l_dc = (header24 & 63) / 63
  let p_dc = ((header24 >> 6) & 63) / 31.5 - 1
  let q_dc = ((header24 >> 12) & 63) / 31.5 - 1
  let l_scale = ((header24 >> 18) & 31) / 31
  let hasAlpha = header24 >> 23
  let p_scale = ((header16 >> 3) & 63) / 63
  let q_scale = ((header16 >> 9) & 63) / 63
  let isLandscape = header16 >> 15
  let lx = max(3, isLandscape ? hasAlpha ? 5 : 7 : header16 & 7)
  let ly = max(3, isLandscape ? header16 & 7 : hasAlpha ? 5 : 7)
  let a_dc = hasAlpha ? (hash[5] & 15) / 15 : 1
  let a_scale = (hash[5] >> 4) / 15

  // Read the varying factors (boost saturation by 1.25x to compensate for quantization)
  let ac_start = hasAlpha ? 6 : 5
  let ac_index = 0
  let decodeChannel = (nx, ny, scale) => {
    let ac = []
    for (let cy = 0; cy < ny; cy++)
      for (let cx = cy ? 0 : 1; cx * ny < nx * (ny - cy); cx++)
        ac.push((((hash[ac_start + (ac_index >> 1)] >> ((ac_index++ & 1) << 2)) & 15) / 7.5 - 1) * scale)
    return ac
  }
  let l_ac = decodeChannel(lx, ly, l_scale)
  let p_ac = decodeChannel(3, 3, p_scale * 1.25)
  let q_ac = decodeChannel(3, 3, q_scale * 1.25)
  let a_ac = hasAlpha && decodeChannel(5, 5, a_scale)

  // Decode using the DCT into RGB
  let ratio = thumbHashToApproximateAspectRatio(hash)
  let w = round(ratio > 1 ? 32 : 32 * ratio)
  let h = round(ratio > 1 ? 32 / ratio : 32)
  let rgba = new Uint8Array(w * h * 4), fx = [], fy = []
  for (let y = 0, i = 0; y < h; y++) {
    for (let x = 0; x < w; x++, i += 4) {
      let l = l_dc, p = p_dc, q = q_dc, a = a_dc

      // Precompute the coefficients
      for (let cx = 0, n = max(lx, hasAlpha ? 5 : 3); cx < n; cx++)
        fx[cx] = cos(PI / w * (x + 0.5) * cx)
      for (let cy = 0, n = max(ly, hasAlpha ? 5 : 3); cy < n; cy++)
        fy[cy] = cos(PI / h * (y + 0.5) * cy)

      // Decode L
      for (let cy = 0, j = 0; cy < ly; cy++)
        for (let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx * ly < lx * (ly - cy); cx++, j++)
          l += l_ac[j] * fx[cx] * fy2

      // Decode P and Q
      for (let cy = 0, j = 0; cy < 3; cy++) {
        for (let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx < 3 - cy; cx++, j++) {
          let f = fx[cx] * fy2
          p += p_ac[j] * f
          q += q_ac[j] * f
        }
      }

      // Decode A
      if (hasAlpha)
        for (let cy = 0, j = 0; cy < 5; cy++)
          for (let cx = cy ? 0 : 1, fy2 = fy[cy] * 2; cx < 5 - cy; cx++, j++)
            a += a_ac[j] * fx[cx] * fy2

      // Convert to RGB
      let b = l - 2 / 3 * p
      let r = (3 * l - b + q) / 2
      let g = r - q
      rgba[i] = max(0, 255 * min(1, r))
      rgba[i + 1] = max(0, 255 * min(1, g))
      rgba[i + 2] = max(0, 255 * min(1, b))
      rgba[i + 3] = max(0, 255 * min(1, a))
    }
  }
  return { w, h, rgba }
}

/**
 * Extracts the average color from a ThumbHash. RGB is not be premultiplied by A.
 *
 * @param hash The bytes of the ThumbHash.
 * @returns The RGBA values for the average color. Each value ranges from 0 to 1.
 */
function thumbHashToAverageRGBA(hash) {
  let { min, max } = Math
  let header = hash[0] | (hash[1] << 8) | (hash[2] << 16)
  let l = (header & 63) / 63
  let p = ((header >> 6) & 63) / 31.5 - 1
  let q = ((header >> 12) & 63) / 31.5 - 1
  let hasAlpha = header >> 23
  let a = hasAlpha ? (hash[5] & 15) / 15 : 1
  let b = l - 2 / 3 * p
  let r = (3 * l - b + q) / 2
  let g = r - q
  return {
    r: max(0, min(1, r)),
    g: max(0, min(1, g)),
    b: max(0, min(1, b)),
    a
  }
}

/**
 * Extracts the approximate aspect ratio of the original image.
 *
 * @param hash The bytes of the ThumbHash.
 * @returns The approximate aspect ratio (i.e. width / height).
 */
function thumbHashToApproximateAspectRatio(hash) {
  let header = hash[3]
  let hasAlpha = hash[2] & 0x80
  let isLandscape = hash[4] & 0x80
  let lx = isLandscape ? hasAlpha ? 5 : 7 : header & 7
  let ly = isLandscape ? header & 7 : hasAlpha ? 5 : 7
  return lx / ly
}

/**
 * Encodes an RGBA image to a PNG data URL. RGB should not be premultiplied by
 * A. This is optimized for speed and simplicity and does not optimize for size
 * at all. This doesn't do any compression (all values are stored uncompressed).
 *
 * @param w The width of the input image. Must be ≤100px.
 * @param h The height of the input image. Must be ≤100px.
 * @param rgba The pixels in the input image, row-by-row. Must have w*h*4 elements.
 * @returns A data URL containing a PNG for the input image.
 */
function rgbaToDataURL(w, h, rgba) {
  let row = w * 4 + 1
  let idat = 6 + h * (5 + row)
  let bytes = [
    137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0,
    w >> 8, w & 255, 0, 0, h >> 8, h & 255, 8, 6, 0, 0, 0, 0, 0, 0, 0,
    idat >>> 24, (idat >> 16) & 255, (idat >> 8) & 255, idat & 255,
    73, 68, 65, 84, 120, 1
  ]
  let table = [
    0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960,
    1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376,
    -2032938284, -1609899400, -1111625188
  ]
  let a = 1, b = 0
  for (let y = 0, i = 0, end = row - 1; y < h; y++, end += row - 1) {
    bytes.push(y + 1 < h ? 0 : 1, row & 255, row >> 8, ~row & 255, (row >> 8) ^ 255, 0)
    for (b = (b + a) % 65521; i < end; i++) {
      let u = rgba[i] & 255
      bytes.push(u)
      a = (a + u) % 65521
      b = (b + a) % 65521
    }
  }
  bytes.push(
    b >> 8, b & 255, a >> 8, a & 255, 0, 0, 0, 0,
    0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130
  )
  for (let [start, end] of [[12, 29], [37, 41 + idat]]) {
    let c = ~0
    for (let i = start; i < end; i++) {
      c ^= bytes[i]
      c = (c >>> 4) ^ table[c & 15]
      c = (c >>> 4) ^ table[c & 15]
    }
    c = ~c
    bytes[end++] = c >>> 24
    bytes[end++] = (c >> 16) & 255
    bytes[end++] = (c >> 8) & 255
    bytes[end++] = c & 255
  }
  return 'data:image/png;base64,' + btoa(String.fromCharCode(...bytes))
}

/**
 * Decodes a ThumbHash to a PNG data URL. This is a convenience function that
 * just calls "thumbHashToRGBA" followed by "rgbaToDataURL".
 *
 * @param hash The bytes of the ThumbHash.
 * @returns A data URL containing a PNG for the rendered ThumbHash.
 */
function thumbHashToDataURL(hash) {
  let image = thumbHashToRGBA(hash)
  return rgbaToDataURL(image.w, image.h, image.rgba)
}

;// CONCATENATED MODULE: ./src/algorithms/thumbhash.ts
var thumbhash_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var thumbhash_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ThumbhashOptionsSchema = external_zod_namespaceObject.z.object({});
var imageToThumbhash = function (data, _options) { return thumbhash_awaiter(void 0, void 0, void 0, function () {
    var image, metadata, scale, newWidth, newHeight, rawPixels, thumbhash;
    return thumbhash_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                image = external_sharp_default()(data);
                return [4 /*yield*/, image.metadata()];
            case 1:
                metadata = _a.sent();
                if (metadata.width == null || metadata.height == null) {
                    throw new Error('Encountered an image without a width/height');
                }
                scale = 100 / Math.max(metadata.width, metadata.height);
                newWidth = Math.round(metadata.width * scale);
                newHeight = Math.round(metadata.height * scale);
                return [4 /*yield*/, image
                        .resize(newWidth, newHeight)
                        .ensureAlpha(1)
                        .raw()
                        .toBuffer()];
            case 2:
                rawPixels = _a.sent();
                thumbhash = Buffer.from(rgbaToThumbHash(newWidth, newHeight, rawPixels));
                return [2 /*return*/, thumbhash.toString('base64')];
        }
    });
}); };

;// CONCATENATED MODULE: ./src/algorithms/index.ts


var algorithms = {
    blurhash: [imageToBlurhash, BlurhashOptionsSchema],
    thumbhash: [imageToThumbhash, ThumbhashOptionsSchema],
};
var defaultAlgorithm = 'blurhash';
var isAlgorithmType = function (type) {
    return type in algorithms;
};
var runAlgorithm = function (algorithmType, data, options) {
    if (!isAlgorithmType(algorithmType)) {
        throw new Error("Unknown algorithm: ".concat(algorithmType));
    }
    var _a = algorithms[algorithmType], algorithm = _a[0], schema = _a[1];
    var parsedOptions = schema.parse(options);
    return algorithm(data, parsedOptions);
};

;// CONCATENATED MODULE: ./src/index.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var src_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var src_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var computeBlurhash = function (pluginOptions) {
    var _a = pluginOptions !== null && pluginOptions !== void 0 ? pluginOptions : {}, collections = _a.collections, _b = _a.mimeTypePattern, mimeTypePattern = _b === void 0 ? 'image/*' : _b, _c = _a.algorithm, algorithm = _c === void 0 ? defaultAlgorithm : _c, options = __rest(_a, ["collections", "mimeTypePattern", "algorithm"]);
    var mimeTypeMatcher = new external_minimatch_namespaceObject.Minimatch(mimeTypePattern);
    return function (incomingConfig) {
        var _a, _b;
        var hook = function (_a) {
            var data = _a.data, req = _a.req;
            return src_awaiter(void 0, void 0, void 0, function () {
                var file, fileData, blurhash;
                var _b;
                return src_generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!req.collection) {
                                return [2 /*return*/, data];
                            }
                            if (!mimeTypeMatcher.match(data.mimeType)) {
                                return [2 /*return*/, data];
                            }
                            file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.file;
                            if (file == null || !('data' in file)) {
                                return [2 /*return*/, data];
                            }
                            fileData = file.data;
                            if (!Buffer.isBuffer(fileData)) {
                                return [2 /*return*/, data];
                            }
                            return [4 /*yield*/, runAlgorithm(algorithm, fileData, options)];
                        case 1:
                            blurhash = _c.sent();
                            return [2 /*return*/, __assign(__assign({}, data), { blurhash: blurhash })];
                    }
                });
            });
        };
        return __assign(__assign({}, incomingConfig), { collections: (_b = (_a = incomingConfig.collections) === null || _a === void 0 ? void 0 : _a.map(function (collection) {
                var _a, _b;
                if (!collection.upload) {
                    return collection;
                }
                if (collections && !collections.includes(collection.slug)) {
                    return collection;
                }
                return __assign(__assign({}, collection), { fields: __spreadArray(__spreadArray([], collection.fields, true), [
                        {
                            name: 'blurhash',
                            type: 'text',
                        },
                    ], false), hooks: __assign(__assign({}, collection.hooks), { beforeChange: __spreadArray(__spreadArray([], ((_b = (_a = collection.hooks) === null || _a === void 0 ? void 0 : _a.beforeChange) !== null && _b !== void 0 ? _b : []), true), [hook], false) }) });
            })) !== null && _b !== void 0 ? _b : [], admin: __assign(__assign({}, incomingConfig.admin), { webpack: function (webpackConfig) {
                    var _a, _b, _c, _d;
                    var modifiedConfig = __assign(__assign({}, webpackConfig), { resolve: __assign(__assign({}, webpackConfig.resolve), { alias: __assign(__assign({}, (_a = webpackConfig.resolve) === null || _a === void 0 ? void 0 : _a.alias), { '@raffaeleparisi/payload-blurhash-plugin': external_path_namespaceObject.resolve(__dirname, './mock-plugin') }) }) });
                    return ((_d = (_c = (_b = incomingConfig.admin) === null || _b === void 0 ? void 0 : _b.webpack) === null || _c === void 0 ? void 0 : _c.call(_b, modifiedConfig)) !== null && _d !== void 0 ? _d : modifiedConfig);
                } }) });
    };
};
/* harmony default export */ const src = (computeBlurhash);

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map