(self["webpackChunkbilletera_redux"] = self["webpackChunkbilletera_redux"] || []).push([["src_containers_Billeteras_jsx"],{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setActive": function() { return /* binding */ setActive; },
/* harmony export */   "setPageSection": function() { return /* binding */ setPageSection; },
/* harmony export */   "setMontoBilletera": function() { return /* binding */ setMontoBilletera; },
/* harmony export */   "setNuevaBilletera": function() { return /* binding */ setNuevaBilletera; },
/* harmony export */   "setActualizarIndex": function() { return /* binding */ setActualizarIndex; }
/* harmony export */ });
//SECCIÓN GENERAL
var setActive = function setActive(payload) {
  return {
    type: 'SET_ACTIVE',
    payload: payload
  };
}; //Seccion Page

var setPageSection = function setPageSection(payload) {
  return {
    type: 'SET_PAGE_SECTION',
    payload: payload
  };
}; //Billetera

var setMontoBilletera = function setMontoBilletera(payload) {
  return {
    type: 'SET_MONTO_BILLETERA',
    payload: payload
  };
};
var setNuevaBilletera = function setNuevaBilletera(payload) {
  return {
    type: 'SET_NUEVA_BILLETERA',
    payload: payload
  };
};
var setActualizarIndex = function setActualizarIndex(payload) {
  return {
    type: 'ACTUALIZAR_INDEX',
    payload: payload
  };
};

/***/ }),

/***/ "./src/assets/static/components/StarSvg.jsx":
/*!**************************************************!*\
  !*** ./src/assets/static/components/StarSvg.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var StarSvg = function StarSvg(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "favorito"
  }, props.favorito ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "seleccionado logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "star",
    className: "svg-inline--fa fa-star fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "no-seleccionado logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "star",
    className: "svg-inline--fa fa-star fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (StarSvg);

/***/ }),

/***/ "./src/assets/static/components/TrashSvg.jsx":
/*!***************************************************!*\
  !*** ./src/assets/static/components/TrashSvg.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var TrashSvg = function TrashSvg(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trash"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "trash-alt",
    className: "svg-inline--fa fa-trash-alt fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TrashSvg);

/***/ }),

/***/ "./src/bd/index.js":
/*!*************************!*\
  !*** ./src/bd/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "url_base": function() { return /* binding */ url_base; }
/* harmony export */ });
var url_base = "http://localhost:5000/api";

/***/ }),

/***/ "./src/components/BilleteraCard.jsx":
/*!******************************************!*\
  !*** ./src/components/BilleteraCard.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_styles_components_BilleteraCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/components/BilleteraCard.scss */ "./src/assets/styles/components/BilleteraCard.scss");
/* harmony import */ var _assets_static_components_StarSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/static/components/StarSvg */ "./src/assets/static/components/StarSvg.jsx");
/* harmony import */ var _assets_static_components_TrashSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/static/components/TrashSvg */ "./src/assets/static/components/TrashSvg.jsx");





var BilleteraCard = function BilleteraCard(props) {
  var formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  var truncate = function truncate(str, num) {
    if (str.length > 25) return str.slice(0, 25) + "...";
    return str;
  };

  var activa = props.billeteraActiva ? props.billeteraActiva.id == props.id : false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-billetera ".concat(activa ? 'activa' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contenido",
    onClick: function onClick() {
      return props.handleSetActivo(props.id, props.data.nombre, props.data.monto);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "datos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "nombre"
  }, truncate(props.data.nombre, 25)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "monto"
  }, formatterPeso.format(props.data.monto)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "fecha"
  }, "FECHA: ", props.data.fecha))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "acciones"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "favorito",
    onClick: function onClick() {
      return props.postFavoritoBilletera({
        billetera_id: props.id,
        favorito: props.favorito
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assets_static_components_StarSvg__WEBPACK_IMPORTED_MODULE_2__.StarSvg, {
    favorito: props.favorito
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "borrar",
    onClick: function onClick() {
      return props.deleteBilletera(props.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assets_static_components_TrashSvg__WEBPACK_IMPORTED_MODULE_3__.TrashSvg, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (BilleteraCard);

/***/ }),

/***/ "./src/components/BilleteraForm.jsx":
/*!******************************************!*\
  !*** ./src/components/BilleteraForm.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_components_BilleteraForm_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/components/BilleteraForm.scss */ "./src/assets/styles/components/BilleteraForm.scss");
/* harmony import */ var _custom_hooks_useGetBilleteras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-hooks/useGetBilleteras */ "./src/custom-hooks/useGetBilleteras.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var BilleteraForm = function BilleteraForm(props) {
  var _props$nombre, _props$monto;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var actualizarIndex = props.actualizarIndex;

  var _useGetBilleteras = (0,_custom_hooks_useGetBilleteras__WEBPACK_IMPORTED_MODULE_3__.useGetBilleteras)(),
      postGuardarBilletera = _useGetBilleteras.postGuardarBilletera;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    nombre: (_props$nombre = props.nombre) !== null && _props$nombre !== void 0 ? _props$nombre : '',
    monto: (_props$monto = props.monto) !== null && _props$monto !== void 0 ? _props$monto : 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      datos = _useState2[0],
      setDatos = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _props$nombre2, _props$monto2;

    setDatos({
      nombre: (_props$nombre2 = props.nombre) !== null && _props$nombre2 !== void 0 ? _props$nombre2 : '',
      monto: (_props$monto2 = props.monto) !== null && _props$monto2 !== void 0 ? _props$monto2 : 0
    });
  }, [props.billetera_id]);

  var handleInputChange = function handleInputChange(event) {
    switch (event.target.name) {
      case 'nombre':
        if (event.target.value.length < 1 || event.target.value.length > 40) {
          return false;
        }

        break;

      case 'monto':
        if (event.target.value == "" || event.target.value == "-" || event.target.value == 0) {} else {
          if (!parseInt(event.target.value) || event.target.value.length > 12) {
            return false;
          }
        }

        break;

      default:
        break;
    }

    setDatos(_objectSpread(_objectSpread({}, datos), {}, _defineProperty({}, event.target.name, event.target.value)));
  };

  var enviarDatos = function enviarDatos(event) {
    event.preventDefault();
    postGuardarBilletera(_objectSpread({
      billetera_id: props.billetera_id
    }, datos)).then(function () {
      if (actualizarIndex == 0) {
        dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_4__.setActualizarIndex)(1));
      } else {
        dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_4__.setActualizarIndex)(0));
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "formulario",
    onSubmit: enviarDatos
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, props.billetera_id > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Editar Billetera") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Agregar Una Nueva Billetera")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    name: "nombre",
    value: datos.nombre,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "highlight"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Nombre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    name: "monto",
    value: datos.monto,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "highlight"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Monto"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Guardar"));
}; // Native functions react-redux (HOC)


var mapStateToProps = function mapStateToProps(state) {
  return {
    actualizarIndex: state.actualizarIndex
  };
};

var mapDispatchToProps = {
  setActualizarIndex: _actions_index__WEBPACK_IMPORTED_MODULE_4__.setActualizarIndex
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(BilleteraForm));

/***/ }),

/***/ "./src/components/BilleterasList.jsx":
/*!*******************************************!*\
  !*** ./src/components/BilleterasList.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_components_BilleteraList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/components/BilleteraList.scss */ "./src/assets/styles/components/BilleteraList.scss");
/* harmony import */ var _custom_hooks_useGetBilleteras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-hooks/useGetBilleteras */ "./src/custom-hooks/useGetBilleteras.js");
/* harmony import */ var _BilleteraCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BilleteraCard */ "./src/components/BilleteraCard.jsx");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var BilleterasList = function BilleterasList(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var billeteraActiva = props.billeteraActiva,
      actualizarIndex = props.actualizarIndex,
      pageSection = props.pageSection;

  var _useGetBilleteras = (0,_custom_hooks_useGetBilleteras__WEBPACK_IMPORTED_MODULE_3__.useGetBilleteras)(),
      billeteras = _useGetBilleteras.billeteras,
      loading = _useGetBilleteras.loading,
      error = _useGetBilleteras.error,
      getBilleteras = _useGetBilleteras.getBilleteras,
      postFavoritoBilletera = _useGetBilleteras.postFavoritoBilletera,
      deleteBilletera = _useGetBilleteras.deleteBilletera;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getBilleteras();
  }, [actualizarIndex, billeteraActiva, pageSection]);

  var handleSetActivo = function handleSetActivo(id, nombre, monto) {
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_5__.setActive)({
      id: id,
      nombre: nombre,
      monto: monto
    }));
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_5__.setPageSection)('Transferencias'));
  };

  var nuevaBilletera = function nuevaBilletera() {
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_5__.setNuevaBilletera)({
      id: 0,
      nombre: 'Nueva Billetera',
      monto: 0
    }));
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_5__.setPageSection)('Billetera'));
  };

  var cambioSectionDeleteBilletera = function cambioSectionDeleteBilletera(id) {
    deleteBilletera(id);
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_5__.setPageSection)('Billetera'));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lista"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nueva-billetera"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mis-billeteras"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Mis Billeteras")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "agregar",
    onClick: nuevaBilletera
  }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lista-billeteras"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "seccion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "FAVORITAS")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Cargando") : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Error") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "billeteras-card"
  }, billeteras.filter(function (billetera) {
    return billetera.favorito == 1;
  }).length > 0 ? billeteras.filter(function (billetera) {
    return billetera.favorito == 1;
  }).map(function (_ref) {
    var id = _ref.id,
        favorito = _ref.favorito,
        otherBilleteraProps = _objectWithoutProperties(_ref, ["id", "favorito"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BilleteraCard__WEBPACK_IMPORTED_MODULE_4__.BilleteraCard, {
      key: id,
      data: otherBilleteraProps,
      id: id,
      favorito: favorito,
      handleSetActivo: handleSetActivo,
      postFavoritoBilletera: postFavoritoBilletera,
      deleteBilletera: cambioSectionDeleteBilletera,
      billeteraActiva: billeteraActiva
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "no-billeteras"
  }, "No hay billeteras")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "seccion",
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "BILLETERAS")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Cargando") : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Error") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "billeteras-card"
  }, billeteras.filter(function (billetera) {
    return billetera.favorito == 0;
  }).length > 0 ? billeteras.filter(function (billetera) {
    return billetera.favorito == 0;
  }).map(function (_ref2) {
    var id = _ref2.id,
        favorito = _ref2.favorito,
        otherBilleteraProps = _objectWithoutProperties(_ref2, ["id", "favorito"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BilleteraCard__WEBPACK_IMPORTED_MODULE_4__.BilleteraCard, {
      key: id,
      data: otherBilleteraProps,
      id: id,
      favorito: favorito,
      handleSetActivo: handleSetActivo,
      postFavoritoBilletera: postFavoritoBilletera,
      deleteBilletera: cambioSectionDeleteBilletera,
      billeteraActiva: billeteraActiva
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "no-billeteras"
  }, "No hay billeteras"))));
}; // Native functions react-redux (HOC)


var mapStateToProps = function mapStateToProps(state) {
  return {
    billeteraActiva: state.billeteraActiva,
    actualizarIndex: state.actualizarIndex,
    pageSection: state.pageSection
  };
};

var mapDispatchToProps = {
  setActive: _actions_index__WEBPACK_IMPORTED_MODULE_5__.setActive,
  setNuevaBilletera: _actions_index__WEBPACK_IMPORTED_MODULE_5__.setNuevaBilletera,
  setPageSection: _actions_index__WEBPACK_IMPORTED_MODULE_5__.setPageSection
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(BilleterasList));

/***/ }),

/***/ "./src/components/ErrorBoundary.jsx":
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.jsx ***!
  \******************************************/
/***/ (function() {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // También puedes registrar el error en un servicio de reporte de errores
      logErrorToMyService(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // Puedes renderizar cualquier interfaz de repuesto
        return /*#__PURE__*/React.createElement("h1", null, "Something went wrong.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(React.Component);

/***/ }),

/***/ "./src/components/PageSection.jsx":
/*!****************************************!*\
  !*** ./src/components/PageSection.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_components_PageSection_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/components/PageSection.scss */ "./src/assets/styles/components/PageSection.scss");
/* harmony import */ var _TransferForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransferForm */ "./src/components/TransferForm.jsx");
/* harmony import */ var _TransferTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransferTable */ "./src/components/TransferTable.jsx");
/* harmony import */ var _custom_hooks_useGetTransferencias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-hooks/useGetTransferencias */ "./src/custom-hooks/useGetTransferencias.js");
/* harmony import */ var _BilleteraForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BilleteraForm */ "./src/components/BilleteraForm.jsx");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");









var PageSection = function PageSection(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var pageSection = props.pageSection;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.billeteraActiva;
  }),
      id = _useSelector.id,
      nombre = _useSelector.nombre,
      monto = _useSelector.monto;

  var _useGetTransferencias = (0,_custom_hooks_useGetTransferencias__WEBPACK_IMPORTED_MODULE_5__.useGetTransferencias)(),
      transferencias = _useGetTransferencias.transferencias,
      loading = _useGetTransferencias.loading,
      error = _useGetTransferencias.error,
      getTransferencias = _useGetTransferencias.getTransferencias,
      postTransferencia = _useGetTransferencias.postTransferencia,
      deleteTransferencia = _useGetTransferencias.deleteTransferencia;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getTransferencias(id);
  }, [id]);
  var formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  var truncate = function truncate(str, num) {
    if (str.length > 25) return str.slice(0, 25) + "...";
    return str;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section"
  }, pageSection == 'Billetera' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BilleteraForm__WEBPACK_IMPORTED_MODULE_6__.BilleteraForm, {
    billetera_id: id,
    nombre: nombre,
    monto: monto
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "datos-billetera"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "nombre"
  }, truncate(nombre, 25)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "monto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "balance"
  }, "Balance Actual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "monto"
  }, formatterPeso.format(monto))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_7__.setPageSection)('Billetera'));
    }
  }, " Editar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TransferForm__WEBPACK_IMPORTED_MODULE_3__.TransferForm, {
    tiulo: "Nueva Billetera",
    postTransferencia: postTransferencia,
    monto: monto,
    billetera_id: id
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TransferTable__WEBPACK_IMPORTED_MODULE_4__.TransferTable, {
    deleteTransferencia: deleteTransferencia,
    billetera_id: id,
    billetera_monto: monto,
    transferencias: transferencias,
    loading: loading,
    error: error
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    pageSection: state.pageSection
  };
};

var mapDispatchToProps = {
  setPageSection: _actions_index__WEBPACK_IMPORTED_MODULE_7__.setPageSection
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(PageSection));

/***/ }),

/***/ "./src/components/TransferCard.jsx":
/*!*****************************************!*\
  !*** ./src/components/TransferCard.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_styles_components_TransferCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/components/TransferCard.scss */ "./src/assets/styles/components/TransferCard.scss");
/* harmony import */ var _assets_static_components_TrashSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/static/components/TrashSvg */ "./src/assets/static/components/TrashSvg.jsx");




var TransferCard = function TransferCard(props) {
  var formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  var truncate = function truncate(str, num) {
    if (str.length > 25) return str.slice(0, 25) + "...";
    return str;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-transferencia"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tipo ".concat(props.data.monto >= 0 ? 'verde-borde' : 'rojo-borde')
  }, props.data.monto > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "texto"
  }, "+") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "texto"
  }, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contenido",
    onClick: function onClick() {
      return props.handleSetActivo(props.id, props.data.nombre, props.data.monto);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "datos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "nombre"
  }, truncate(props.data.nombre, 30)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "monto ".concat(props.data.monto >= 0 ? 'verde-texto' : 'rojo-texto', " ")
  }, formatterPeso.format(props.data.monto)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "fecha"
  }, "FECHA: ", props.data.fecha))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "acciones"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "borrar",
    onClick: function onClick() {
      return props.deleteTransferencia(props.id, props.data.monto);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assets_static_components_TrashSvg__WEBPACK_IMPORTED_MODULE_2__.TrashSvg, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransferCard);

/***/ }),

/***/ "./src/components/TransferForm.jsx":
/*!*****************************************!*\
  !*** ./src/components/TransferForm.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_components_TransferForm_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/components/TransferForm.scss */ "./src/assets/styles/components/TransferForm.scss");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var TransferForm = function TransferForm(props) {
  var _React$createElement;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var actualizarIndex = props.actualizarIndex;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    nombre: 'Nueva Transferencia',
    monto: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      datos = _useState2[0],
      setDatos = _useState2[1];

  var handleInputChange = function handleInputChange(event) {
    switch (event.target.name) {
      case 'nombre':
        if (event.target.value.length < 1 || event.target.value.length > 40) {
          return false;
        }

        break;

      case 'monto':
        if (event.target.value.length < 1 || event.target.value.length > 6) {
          return false;
        }

        event.target.value = parseInt(event.target.value);
        break;

      default:
        break;
    }

    setDatos(_objectSpread(_objectSpread({}, datos), {}, _defineProperty({}, event.target.name, event.target.value)));
  };

  var enviarDatos = function enviarDatos(event) {
    event.preventDefault();
    var monto_billetera = parseInt(props.monto) + parseInt(datos.monto);
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_3__.setMontoBilletera)(monto_billetera));
    setDatos({
      nombre: 'Nueva Transferencia',
      monto: 0
    });
    props.postTransferencia(_objectSpread({
      billetera_id: props.billetera_id,
      monto_billetera: monto_billetera
    }, datos));

    if (actualizarIndex == 0) {
      dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_3__.setActualizarIndex)(1));
    } else {
      dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_3__.setActualizarIndex)(0));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "formulario-transferencia",
    onSubmit: enviarDatos
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Agregar Una Nueva Transferencia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "section-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    name: "nombre",
    value: datos.nombre,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "highlight"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Nombre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement = {
    type: "number"
  }, _defineProperty(_React$createElement, "type", "number"), _defineProperty(_React$createElement, "name", "monto"), _defineProperty(_React$createElement, "value", datos.monto), _defineProperty(_React$createElement, "onChange", handleInputChange), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "highlight"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Monto"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Guardar"));
}; // Native functions react-redux (HOC)


var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteCharacters: state.favoriteCharacters,
    actualizarIndex: state.actualizarIndex
  };
};

var mapDispatchToProps = {
  setMontoBilletera: _actions_index__WEBPACK_IMPORTED_MODULE_3__.setMontoBilletera,
  setActualizarIndex: _actions_index__WEBPACK_IMPORTED_MODULE_3__.setActualizarIndex
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TransferForm));

/***/ }),

/***/ "./src/components/TransferTable.jsx":
/*!******************************************!*\
  !*** ./src/components/TransferTable.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_components_TransferTable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/components/TransferTable.scss */ "./src/assets/styles/components/TransferTable.scss");
/* harmony import */ var _TransferCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransferCard */ "./src/components/TransferCard.jsx");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var TransferTable = function TransferTable(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var deleteTransferencia = function deleteTransferencia(id, monto) {
    var monto_billetera = parseInt(props.billetera_monto) + parseInt(-monto);
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_4__.setMontoBilletera)(monto_billetera));
    props.deleteTransferencia(props.billetera_id, monto_billetera, id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "transfer-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Transferencias realizadas"), props.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Cargando") : props.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Error") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "transfers-list"
  }, props.transferencias.length > 0 ? props.transferencias.map(function (_ref) {
    var id = _ref.id,
        otherTransferenciaProps = _objectWithoutProperties(_ref, ["id"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TransferCard__WEBPACK_IMPORTED_MODULE_3__.TransferCard, {
      deleteTransferencia: deleteTransferencia,
      id: id,
      data: otherTransferenciaProps
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "no-billeteras"
  }, "No hay billeteras")));
}; // Native functions react-redux (HOC)


var mapDispatchToProps = {
  setMontoBilletera: _actions_index__WEBPACK_IMPORTED_MODULE_4__.setMontoBilletera
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(TransferTable));

/***/ }),

/***/ "./src/containers/Billeteras.jsx":
/*!***************************************!*\
  !*** ./src/containers/Billeteras.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_styles_components_Billeteras_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/components/Billeteras.scss */ "./src/assets/styles/components/Billeteras.scss");
/* harmony import */ var _components_BilleterasList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BilleterasList */ "./src/components/BilleterasList.jsx");
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ErrorBoundary */ "./src/components/ErrorBoundary.jsx");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__);






var Billeteras = function Billeteras() {
  return (
    /*#__PURE__*/
    //<ErrorBoundary>
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "billetera-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "billetera"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BilleterasList__WEBPACK_IMPORTED_MODULE_2__.BilleterasList, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "page-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_3__.PageSection, null))) //</ErrorBoundary>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Billeteras);

/***/ }),

/***/ "./src/custom-hooks/useGetBilleteras.js":
/*!**********************************************!*\
  !*** ./src/custom-hooks/useGetBilleteras.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _bd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bd */ "./src/bd/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useGetBilleteras = function useGetBilleteras() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      billeteras = _useState2[0],
      setBilleteras = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  function getBilleteras() {
    return _getBilleteras.apply(this, arguments);
  }

  function _getBilleteras() {
    _getBilleteras = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_bd__WEBPACK_IMPORTED_MODULE_2__.url_base, "/billetera/index"));

            case 3:
              response = _context.sent;
              result = response.data;
              setBilleteras(result);
              setLoading(false);
              setError(false);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setLoading(false);
              setError(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _getBilleteras.apply(this, arguments);
  }

  function postGuardarBilletera(_x) {
    return _postGuardarBilletera.apply(this, arguments);
  }

  function _postGuardarBilletera() {
    _postGuardarBilletera = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
      var nombre, monto, billetera_id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              nombre = _ref.nombre, monto = _ref.monto, billetera_id = _ref.billetera_id;
              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_bd__WEBPACK_IMPORTED_MODULE_2__.url_base, "/billetera/save"), {
                nombre: nombre,
                monto: monto,
                billetera_id: billetera_id
              });

            case 4:
              setLoading(false);
              setError(false);
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              setLoading(false);
              setError(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));
    return _postGuardarBilletera.apply(this, arguments);
  }

  function postFavoritoBilletera(_x2) {
    return _postFavoritoBilletera.apply(this, arguments);
  }

  function _postFavoritoBilletera() {
    _postFavoritoBilletera = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref2) {
      var billetera_id, favorito, response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              billetera_id = _ref2.billetera_id, favorito = _ref2.favorito;
              _context3.prev = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_bd__WEBPACK_IMPORTED_MODULE_2__.url_base, "/billetera/favorito"), {
                billetera_id: billetera_id,
                favorito: favorito
              });

            case 4:
              response = _context3.sent;
              setLoading(false);
              setError(false);
              getBilleteras();
              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              setLoading(false);
              setError(_context3.t0);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 10]]);
    }));
    return _postFavoritoBilletera.apply(this, arguments);
  }

  function deleteBilletera(_x3) {
    return _deleteBilletera.apply(this, arguments);
  }

  function _deleteBilletera() {
    _deleteBilletera = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(billetera_id) {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_bd__WEBPACK_IMPORTED_MODULE_2__.url_base, "/billetera/delete"), {
                billetera_id: billetera_id
              });

            case 3:
              response = _context4.sent;
              setLoading(false);
              setError(false);
              getBilleteras();
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              setLoading(false);
              setError(_context4.t0);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));
    return _deleteBilletera.apply(this, arguments);
  }

  return {
    billeteras: billeteras,
    loading: loading,
    error: error,
    getBilleteras: getBilleteras,
    postGuardarBilletera: postGuardarBilletera,
    postFavoritoBilletera: postFavoritoBilletera,
    deleteBilletera: deleteBilletera
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useGetBilleteras);

/***/ }),

/***/ "./src/custom-hooks/useGetTransferencias.js":
/*!**************************************************!*\
  !*** ./src/custom-hooks/useGetTransferencias.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _bd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bd */ "./src/bd/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useGetTransferencias = function useGetTransferencias() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      transferencias = _useState2[0],
      setTransferencias = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  function getTransferencias(_x) {
    return _getTransferencias.apply(this, arguments);
  }

  function _getTransferencias() {
    _getTransferencias = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
      var response, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_bd__WEBPACK_IMPORTED_MODULE_2__.url_base, "/transferencia/billetera"), {
                billetera: id
              });

            case 3:
              response = _context.sent;
              result = response.data;
              setTransferencias(result);
              setLoading(false);
              setError(false);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setLoading(false);
              setError(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _getTransferencias.apply(this, arguments);
  }

  function postTransferencia(_x2) {
    return _postTransferencia.apply(this, arguments);
  }

  function _postTransferencia() {
    _postTransferencia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
      var nombre, monto, billetera_id, monto_billetera, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              nombre = _ref.nombre, monto = _ref.monto, billetera_id = _ref.billetera_id, monto_billetera = _ref.monto_billetera;
              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_bd__WEBPACK_IMPORTED_MODULE_2__.url_base, "/transferencia/save"), {
                nombre: nombre,
                monto: monto,
                billetera_id: billetera_id,
                monto_billetera: monto_billetera
              });

            case 4:
              response = _context2.sent;
              setLoading(false);
              setError(false);
              getTransferencias(billetera_id);
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              setLoading(false);
              setError(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 10]]);
    }));
    return _postTransferencia.apply(this, arguments);
  }

  function deleteTransferencia(_x3, _x4, _x5) {
    return _deleteTransferencia.apply(this, arguments);
  }

  function _deleteTransferencia() {
    _deleteTransferencia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(billetera_id, monto_billetera, id_transferecia) {
      var response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_bd__WEBPACK_IMPORTED_MODULE_2__.url_base, "/transferencia/delete"), {
                id: id_transferecia,
                billetera_id: billetera_id,
                monto_billetera: monto_billetera
              });

            case 3:
              response = _context3.sent;
              getTransferencias(billetera_id);
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              setLoading(false);
              setError(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return _deleteTransferencia.apply(this, arguments);
  }

  return {
    transferencias: transferencias,
    loading: loading,
    error: error,
    getTransferencias: getTransferencias,
    postTransferencia: postTransferencia,
    deleteTransferencia: deleteTransferencia
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useGetTransferencias);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraCard.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraCard.scss ***!
  \**************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: #FECC5B;\n  color: #000000;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n\n.favorito .logo {\n  margin: 10px auto 0px auto;\n  width: 20px;\n  transition: width 0.3s;\n}\n.favorito .logo:hover {\n  width: 27px;\n}\n.favorito .seleccionado {\n  color: #FECC5B;\n}\n\n.trash .logo {\n  margin: 10px auto 0px auto;\n  color: #EC5853;\n  width: 15px;\n  transition: width 0.3s;\n}\n.trash .logo:hover {\n  width: 20px;\n}\n\n.layout {\n  margin-top: 10px;\n}\n\n.cargando {\n  margin: 10px 50%;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.card-billetera {\n  display: flex;\n  flex-direction: row;\n  background-color: #FFFFFF;\n  border: 2px solid #8d8d8d;\n  width: 80% !important;\n  margin: 10px auto;\n}\n.card-billetera .contenido {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n}\n.card-billetera .contenido .datos {\n  width: 100%;\n  margin-left: 10px;\n}\n.card-billetera .contenido .datos .nombre {\n  color: #8d8d8d;\n  font-size: 1em;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.card-billetera .contenido .datos .monto {\n  color: #000000;\n  font-size: 1.1em;\n  font-weight: 800;\n  margin-top: 0px;\n}\n.card-billetera .contenido .datos .fecha {\n  color: #c0c0c0;\n  font-size: 0.7em;\n  font-weight: 800;\n  margin-top: 0px;\n}\n.card-billetera .acciones {\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.card-billetera .acciones .favorito {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.2em;\n  height: 50%;\n}\n.card-billetera .acciones .borrar {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.2em;\n  height: 50%;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/components/BilleteraCard.scss","webpack://./src/assets/styles/Vars.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;ACAJ;;ADGE;;EAEE,cAAA;EACA,qBAAA;ACAJ;;ADGE;EACE,SAAA;EACA,yBAAA;EACA,cELS;EFMT,0CEZQ;ADYZ;;ADGE;;;;;;;EAQE,iCExBS;ADuBb;;ADIE;EACE,SAAA;EACA,UAAA;ACDJ;;ADIE;EACE,+BAAA;ACDJ;;ADOI;EAEE,0BAAA;EAGA,WAAA;EACA,sBAAA;ACPN;ADQM;EACE,WAAA;ACNR;ADUI;EACE,cAAA;ACRN;;ADaI;EAEE,0BAAA;EAEA,cAAA;EAEA,WAAA;EACA,sBAAA;ACbN;ADcM;EACE,WAAA;ACZR;;ADmBE;EACE,gBAAA;AChBJ;;ADmBE;EACE,gBAAA;EAEA,YAAA;EACA,iBAAA;EACA,eAAA;ACjBJ;;AAlEA;EAEI,aAAA;EACA,mBAAA;EAGA,yBAAA;EACA,yBAAA;EAEA,qBAAA;EACA,iBAAA;AAiEJ;AA7DI;EACI,UAAA;EAEA,aAAA;EACA,uBAAA;AA8DR;AA5DQ;EACI,WAAA;EAEA,iBAAA;AA6DZ;AA3DY;EACI,cAAA;EAEA,cAAA;EACA,gBAAA;EAEA,kBAAA;AA2DhB;AAxDY;EACI,cAAA;EAEA,gBAAA;EACA,gBAAA;EAEA,eAAA;AAwDhB;AArDY;EACI,cAAA;EAEA,gBAAA;EACA,gBAAA;EAEA,eAAA;AAqDhB;AAhDI;EACI,UAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;AAiDR;AA/CQ;EACI,eAAA;EAEA,kBAAA;EACA,gBAAA;EACA,WAAA;AAgDZ;AA3CQ;EACI,eAAA;EACA,kBAAA;EAEA,gBAAA;EACA,WAAA;AA4CZ","sourcesContent":["@import './Vars.scss';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  a:link,\r\n  a:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    background-color: $amarillo-pastel;\r\n    color: $dark-color;\r\n    font-family: $text-font;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    \r\n    font-family: $title-font;\r\n  }\r\n  \r\n  figure {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  section {\r\n    min-height: calc(100vh - 300px);\r\n    \r\n  }\r\n\r\n\r\n  .favorito{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n\r\n      width: 20px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 27px;\r\n      }\r\n    }\r\n\r\n    .seleccionado{\r\n      color: #FECC5B;\r\n    }\r\n\r\n  }\r\n  .trash{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n      color:#EC5853;\r\n\r\n      width: 15px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 20px;\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n\r\n  .layout{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .cargando{\r\n    margin: 10px 50%;\r\n\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n  }","@import '../App.scss';\r\n\r\n.card-billetera{\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    \r\n    background-color:#FFFFFF ;\r\n    border: 2px solid #8d8d8d;\r\n\r\n    width: 80% !important;\r\n    margin: 10px auto;\r\n\r\n    \r\n    \r\n    .contenido{\r\n        width: 80%;\r\n        \r\n        display: flex;\r\n        justify-content: center;\r\n        \r\n        .datos{\r\n            width: 100%;\r\n\r\n            margin-left: 10px;\r\n\r\n            .nombre{\r\n                color: #8d8d8d;\r\n\r\n                font-size: 1em;\r\n                font-weight: 600;\r\n\r\n                margin-bottom: 5px;\r\n            }\r\n\r\n            .monto{\r\n                color: #000000;\r\n\r\n                font-size: 1.1em;\r\n                font-weight: 800;\r\n\r\n                margin-top: 0px;\r\n\r\n            }\r\n            .fecha{\r\n                color: #c0c0c0;\r\n\r\n                font-size: 0.7em;\r\n                font-weight: 800;\r\n\r\n                margin-top: 0px;\r\n\r\n            }\r\n        }\r\n    }\r\n    .acciones{\r\n        width: 20%;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n\r\n        .favorito{\r\n            cursor: pointer;\r\n\r\n            text-align: center;\r\n            font-size: 1.2em;\r\n            height: 50%;\r\n\r\n            \r\n\r\n        }\r\n        .borrar{\r\n            cursor: pointer;\r\n            text-align: center;\r\n\r\n            font-size: 1.2em;\r\n            height: 50%;\r\n\r\n            \r\n        }\r\n\r\n    }\r\n\r\n    \r\n}","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n\r\n$amarillo-pastel: #FECC5B;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraForm.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraForm.scss ***!
  \**************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: #FECC5B;\n  color: #000000;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n\n.favorito .logo {\n  margin: 10px auto 0px auto;\n  width: 20px;\n  transition: width 0.3s;\n}\n.favorito .logo:hover {\n  width: 27px;\n}\n.favorito .seleccionado {\n  color: #FECC5B;\n}\n\n.trash .logo {\n  margin: 10px auto 0px auto;\n  color: #EC5853;\n  width: 15px;\n  transition: width 0.3s;\n}\n.trash .logo:hover {\n  width: 20px;\n}\n\n.layout {\n  margin-top: 10px;\n}\n\n.cargando {\n  margin: 10px 50%;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.formulario {\n  width: 100%;\n  padding-left: 30px;\n}\n.formulario h2 {\n  margin-top: 30px;\n}\n.formulario .section-input {\n  margin-top: 80px;\n  display: flex;\n  justify-content: start;\n  /* LABEL ======================================= */\n  /* active state */\n  /* BOTTOM BARS ================================= */\n  /* active state */\n  /* HIGHLIGHTER ================================== */\n  /* active state */\n  /* ANIMATIONS ================ */\n}\n.formulario .section-input .group {\n  position: relative;\n  margin-bottom: 30px;\n  margin-right: 20px;\n}\n.formulario .section-input input {\n  font-size: 18px;\n  padding: 10px 10px 10px 0px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #8d8d8d;\n}\n.formulario .section-input input:focus {\n  outline: none;\n}\n.formulario .section-input label {\n  color: #999;\n  font-size: 30px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n.formulario .section-input input:focus ~ label, .formulario .section-input input:valid ~ label {\n  top: -20px;\n  font-size: 20px;\n  color: #8d8d8d;\n}\n.formulario .section-input .bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n.formulario .section-input .bar:before, .formulario .section-input .bar:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #FECC5B;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n.formulario .section-input .bar:before {\n  left: 50%;\n}\n.formulario .section-input .bar:after {\n  right: 50%;\n}\n.formulario .section-input input:focus ~ .bar:before, .formulario .section-input input:focus ~ .bar:after {\n  width: 50%;\n}\n.formulario .section-input .highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.formulario .section-input input:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #FECC5B;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #FECC5B;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n@keyframes inputHighlighter {\n  from {\n    background: #FECC5B;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n.formulario button {\n  cursor: pointer;\n  border: 1px solid #8d8d8d !important;\n  width: 100px;\n  height: 40px;\n  color: #000000;\n  font-weight: 800;\n  font-size: 1em;\n  background-color: #FECC5B;\n}\n.formulario button:hover {\n  filter: brightness(0.95);\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/components/BilleteraForm.scss","webpack://./src/assets/styles/Vars.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;ACAJ;;ADGE;;EAEE,cAAA;EACA,qBAAA;ACAJ;;ADGE;EACE,SAAA;EACA,yBAAA;EACA,cELS;EFMT,0CEZQ;ADYZ;;ADGE;;;;;;;EAQE,iCExBS;ADuBb;;ADIE;EACE,SAAA;EACA,UAAA;ACDJ;;ADIE;EACE,+BAAA;ACDJ;;ADOI;EAEE,0BAAA;EAGA,WAAA;EACA,sBAAA;ACPN;ADQM;EACE,WAAA;ACNR;ADUI;EACE,cAAA;ACRN;;ADaI;EAEE,0BAAA;EAEA,cAAA;EAEA,WAAA;EACA,sBAAA;ACbN;ADcM;EACE,WAAA;ACZR;;ADmBE;EACE,gBAAA;AChBJ;;ADmBE;EACE,gBAAA;EAEA,YAAA;EACA,iBAAA;EACA,eAAA;ACjBJ;;AAnEA;EACI,WAAA;EAEA,kBAAA;AAqEJ;AAlEI;EACI,gBAAA;AAoER;AAlEI;EACI,gBAAA;EAEA,aAAA;EACA,sBAAA;EAkBE,kDAAA;EAcA,iBAAA;EAOA,kDAAA;EAoBA,iBAAA;EAKA,mDAAA;EAWA,iBAAA;EAOA,gCAAA;AARV;AAvEQ;EACI,kBAAA;EACA,mBAAA;EACA,kBAAA;AAyEZ;AAvEU;EACE,eAAA;EACA,2BAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,gCAAA;AAyEZ;AAvEU;EAAgB,aAAA;AA0E1B;AAvEU;EACE,WAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;EACA,SAAA;EACA,yBAAA;EACA,8BAAA;EACA,iCAAA;AAyEZ;AArEU;EACE,UAAA;EACA,eAAA;EACA,cAAA;AAuEZ;AAnEU;EAAQ,kBAAA;EAAmB,cAAA;EAAe,YAAA;AAwEpD;AAvEU;EACE,WAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,8BAAA;EACA,iCAAA;AAyEZ;AAvEU;EACE,SAAA;AAyEZ;AAvEU;EACE,UAAA;AAyEZ;AArEU;EACE,UAAA;AAuEZ;AAnEU;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,QAAA;EACA,OAAA;EACA,oBAAA;EACA,YAAA;AAqEZ;AAjEU;EACE,6CAAA;EACA,0CAAA;EACA,qCAAA;AAmEZ;AA/DU;EACI;IAAO,mBAAA;EAkEnB;EAjEU;IAAM,QAAA;IAAS,uBAAA;EAqEzB;AACF;AApEU;EACI;IAAO,mBAAA;EAuEnB;EAtEU;IAAM,QAAA;IAAS,uBAAA;EA0EzB;AACF;AAzEU;EACI;IAAO,mBAAA;EA4EnB;EA3EU;IAAM,QAAA;IAAS,uBAAA;EA+EzB;AACF;AA3EI;EAEI,eAAA;EAEA,oCAAA;EAEA,YAAA;EACA,YAAA;EAEA,cAAA;EACA,gBAAA;EACA,cAAA;EAGA,yBAAA;AAuER;AApEQ;EACI,wBAAA;AAsEZ","sourcesContent":["@import './Vars.scss';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  a:link,\r\n  a:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    background-color: $amarillo-pastel;\r\n    color: $dark-color;\r\n    font-family: $text-font;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    \r\n    font-family: $title-font;\r\n  }\r\n  \r\n  figure {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  section {\r\n    min-height: calc(100vh - 300px);\r\n    \r\n  }\r\n\r\n\r\n  .favorito{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n\r\n      width: 20px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 27px;\r\n      }\r\n    }\r\n\r\n    .seleccionado{\r\n      color: #FECC5B;\r\n    }\r\n\r\n  }\r\n  .trash{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n      color:#EC5853;\r\n\r\n      width: 15px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 20px;\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n\r\n  .layout{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .cargando{\r\n    margin: 10px 50%;\r\n\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n  }","@import '../App.scss';\r\n.formulario{\r\n    width: 100%;\r\n\r\n    padding-left: 30px;\r\n\r\n   \r\n    h2{\r\n        margin-top: 30px;\r\n    }\r\n    .section-input{\r\n        margin-top: 80px;\r\n\r\n        display: flex;\r\n        justify-content: start;\r\n\r\n\r\n        .group \t\t\t  { \r\n            position:relative; \r\n            margin-bottom:30px; \r\n            margin-right: 20px;\r\n          }\r\n          input \t\t\t\t{\r\n            font-size:18px;\r\n            padding:10px 10px 10px 0px;\r\n            display:block;\r\n            width:300px;\r\n            border:none;\r\n            border-bottom:1px solid #8d8d8d;\r\n          }\r\n          input:focus \t\t{ outline:none; }\r\n          \r\n          /* LABEL ======================================= */\r\n          label \t\t\t\t {\r\n            color:#999; \r\n            font-size:30px;\r\n            font-weight:normal;\r\n            position:absolute;\r\n            pointer-events:none;\r\n            left:0px;\r\n            top:10px;\r\n            transition:0.2s ease all; \r\n            -moz-transition:0.2s ease all; \r\n            -webkit-transition:0.2s ease all;\r\n          }\r\n          \r\n          /* active state */\r\n          input:focus ~ label, input:valid ~ label \t\t{\r\n            top:-20px;\r\n            font-size:20px;\r\n            color:#8d8d8d;\r\n          }\r\n          \r\n          /* BOTTOM BARS ================================= */\r\n          .bar \t{ position:relative; display:block; width:300px; }\r\n          .bar:before, .bar:after \t{\r\n            content:'';\r\n            height:2px; \r\n            width:0;\r\n            bottom:1px; \r\n            position:absolute;\r\n            background:#FECC5B; \r\n            transition:0.2s ease all; \r\n            -moz-transition:0.2s ease all; \r\n            -webkit-transition:0.2s ease all;\r\n          }\r\n          .bar:before {\r\n            left:50%;\r\n          }\r\n          .bar:after {\r\n            right:50%; \r\n          }\r\n          \r\n          /* active state */\r\n          input:focus ~ .bar:before, input:focus ~ .bar:after {\r\n            width:50%;\r\n          }\r\n          \r\n          /* HIGHLIGHTER ================================== */\r\n          .highlight {\r\n            position:absolute;\r\n            height:60%; \r\n            width:100px; \r\n            top:25%; \r\n            left:0;\r\n            pointer-events:none;\r\n            opacity:0.5;\r\n          }\r\n          \r\n          /* active state */\r\n          input:focus ~ .highlight {\r\n            -webkit-animation:inputHighlighter 0.3s ease;\r\n            -moz-animation:inputHighlighter 0.3s ease;\r\n            animation:inputHighlighter 0.3s ease;\r\n          }\r\n          \r\n          /* ANIMATIONS ================ */\r\n          @-webkit-keyframes inputHighlighter {\r\n              from { background:#FECC5B; }\r\n            to \t{ width:0; background:transparent; }\r\n          }\r\n          @-moz-keyframes inputHighlighter {\r\n              from { background:#FECC5B; }\r\n            to \t{ width:0; background:transparent; }\r\n          }\r\n          @keyframes inputHighlighter {\r\n              from { background:#FECC5B; }\r\n            to \t{ width:0; background:transparent; }\r\n          }\r\n    }\r\n\r\n\r\n    button{\r\n\r\n        cursor: pointer;\r\n\r\n        border: 1px solid #8d8d8d !important;\r\n\r\n        width: 100px;\r\n        height: 40px;\r\n\r\n        color: #000000;\r\n        font-weight: 800;\r\n        font-size: 1em;\r\n\r\n\r\n        background-color: #FECC5B;\r\n\r\n        \r\n        &:hover{\r\n            filter: brightness(0.95)\r\n        }\r\n    }\r\n}","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n\r\n$amarillo-pastel: #FECC5B;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraList.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraList.scss ***!
  \**************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: #FECC5B;\n  color: #000000;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n\n.favorito .logo {\n  margin: 10px auto 0px auto;\n  width: 20px;\n  transition: width 0.3s;\n}\n.favorito .logo:hover {\n  width: 27px;\n}\n.favorito .seleccionado {\n  color: #FECC5B;\n}\n\n.trash .logo {\n  margin: 10px auto 0px auto;\n  color: #EC5853;\n  width: 15px;\n  transition: width 0.3s;\n}\n.trash .logo:hover {\n  width: 20px;\n}\n\n.layout {\n  margin-top: 10px;\n}\n\n.cargando {\n  margin: 10px 50%;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.lista {\n  background-color: #F2F2F2;\n}\n.lista .nueva-billetera {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lista .nueva-billetera .mis-billeteras {\n  width: 80%;\n}\n.lista .nueva-billetera .mis-billeteras p {\n  padding-left: 20px;\n  color: #8d8d8d;\n  font-size: 2em;\n  font-weight: 800;\n}\n.lista .nueva-billetera .agregar {\n  cursor: pointer;\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: font-size 0.3s;\n  color: #8d8d8d;\n  font-size: 2em;\n  font-weight: 800;\n}\n.lista .nueva-billetera .agregar:hover {\n  font-size: 3em;\n  filter: brightness(1.2);\n}\n.lista .lista-billeteras .seccion {\n  border-bottom: 2px solid #FECC5B;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  height: 30px;\n  padding-left: 20px;\n  color: #b3b3b3;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n.lista .lista-billeteras .no-billeteras {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n}\n.lista .lista-billeteras .billeteras-card {\n  max-height: 350px;\n  overflow: auto;\n  margin-bottom: 10px;\n}\n.lista .lista-billeteras .billeteras-card .activa {\n  background-color: #fbf0d2 !important;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/components/BilleteraList.scss","webpack://./src/assets/styles/Vars.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;ACAJ;;ADGE;;EAEE,cAAA;EACA,qBAAA;ACAJ;;ADGE;EACE,SAAA;EACA,yBAAA;EACA,cELS;EFMT,0CEZQ;ADYZ;;ADGE;;;;;;;EAQE,iCExBS;ADuBb;;ADIE;EACE,SAAA;EACA,UAAA;ACDJ;;ADIE;EACE,+BAAA;ACDJ;;ADOI;EAEE,0BAAA;EAGA,WAAA;EACA,sBAAA;ACPN;ADQM;EACE,WAAA;ACNR;ADUI;EACE,cAAA;ACRN;;ADaI;EAEE,0BAAA;EAEA,cAAA;EAEA,WAAA;EACA,sBAAA;ACbN;ADcM;EACE,WAAA;ACZR;;ADmBE;EACE,gBAAA;AChBJ;;ADmBE;EACE,gBAAA;EAEA,YAAA;EACA,iBAAA;EACA,eAAA;ACjBJ;;AAnEA;EACI,yBAAA;AAsEJ;AApEI;EAEI,aAAA;EACA,uBAAA;EACA,mBAAA;AAqER;AAnEQ;EAEI,UAAA;AAoEZ;AA/DY;EACI,kBAAA;EAEA,cAAA;EAEA,cAAA;EACA,gBAAA;AA+DhB;AA5DQ;EACI,eAAA;EAEI,UAAA;EAIA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,0BAAA;EAQA,cAAA;EAEA,cAAA;EACA,gBAAA;AAiDhB;AA3DgB;EACI,cAAA;EACA,uBAAA;AA6DpB;AA5CQ;EAEI,gCAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EAGA,YAAA;EAEA,kBAAA;EAEA,cAAA;EACA,gBAAA;EACA,gBAAA;AAwCZ;AApCQ;EACI,UAAA;EACA,aAAA;EACA,uBAAA;AAsCZ;AAnCQ;EACI,iBAAA;EACA,cAAA;EAEA,mBAAA;AAoCZ;AAlCY;EACI,oCAAA;AAoChB","sourcesContent":["@import './Vars.scss';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  a:link,\r\n  a:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    background-color: $amarillo-pastel;\r\n    color: $dark-color;\r\n    font-family: $text-font;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    \r\n    font-family: $title-font;\r\n  }\r\n  \r\n  figure {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  section {\r\n    min-height: calc(100vh - 300px);\r\n    \r\n  }\r\n\r\n\r\n  .favorito{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n\r\n      width: 20px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 27px;\r\n      }\r\n    }\r\n\r\n    .seleccionado{\r\n      color: #FECC5B;\r\n    }\r\n\r\n  }\r\n  .trash{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n      color:#EC5853;\r\n\r\n      width: 15px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 20px;\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n\r\n  .layout{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .cargando{\r\n    margin: 10px 50%;\r\n\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n  }","@import '../App.scss';\r\n.lista{\r\n    background-color: #F2F2F2;\r\n\r\n    .nueva-billetera{\r\n\r\n        display:flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        .mis-billeteras{\r\n\r\n            width: 80%;\r\n\r\n            \r\n\r\n\r\n            p{\r\n                padding-left: 20px;\r\n\r\n                color:#8d8d8d;\r\n\r\n                font-size: 2em;\r\n                font-weight: 800;\r\n            }\r\n        }\r\n        .agregar{\r\n            cursor: pointer;\r\n\r\n                width: 20%;\r\n                \r\n\r\n        \r\n                display:flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n\r\n                transition: font-size 0.3s;\r\n                &:hover{\r\n                    font-size: 3em;\r\n                    filter: brightness(1.2)\r\n                }\r\n        \r\n                \r\n               \r\n                color: #8d8d8d;\r\n    \r\n                font-size: 2em;\r\n                font-weight: 800;\r\n                \r\n        }\r\n        \r\n\r\n\r\n    }\r\n\r\n    .lista-billeteras{\r\n        .seccion{\r\n            \r\n            border-bottom: 2px solid $amarillo-pastel;\r\n\r\n            display:flex;\r\n            justify-content: start;\r\n            align-items: center;\r\n\r\n\r\n            height: 30px;\r\n\r\n            padding-left: 20px;\r\n\r\n            color:#b3b3b3;\r\n            font-size: 1.2em;\r\n            font-weight: 600;\r\n            \r\n        }\r\n\r\n        .no-billeteras{\r\n            width: 80%;\r\n            display: flex;\r\n            justify-content: center;\r\n        }\r\n\r\n        .billeteras-card{\r\n            max-height: 350px;\r\n            overflow: auto;\r\n\r\n            margin-bottom: 10px;\r\n\r\n            .activa{\r\n                background-color: #fbf0d2 !important;\r\n            }\r\n        }\r\n\r\n        \r\n    }\r\n\r\n\r\n}","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n\r\n$amarillo-pastel: #FECC5B;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Billeteras.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Billeteras.scss ***!
  \***********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: #FECC5B;\n  color: #000000;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n\n.favorito .logo {\n  margin: 10px auto 0px auto;\n  width: 20px;\n  transition: width 0.3s;\n}\n.favorito .logo:hover {\n  width: 27px;\n}\n.favorito .seleccionado {\n  color: #FECC5B;\n}\n\n.trash .logo {\n  margin: 10px auto 0px auto;\n  color: #EC5853;\n  width: 15px;\n  transition: width 0.3s;\n}\n.trash .logo:hover {\n  width: 20px;\n}\n\n.layout {\n  margin-top: 10px;\n}\n\n.cargando {\n  margin: 10px 50%;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.billetera-section {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  max-width: 80%;\n  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.79);\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.79);\n  background-color: #FFFFFF;\n}\n.billetera-section .billetera {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 500px;\n  background-color: #F2F2F2;\n}\n.billetera-section .page-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  width: 1000px;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/components/Billeteras.scss","webpack://./src/assets/styles/Vars.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;ACAJ;;ADGE;;EAEE,cAAA;EACA,qBAAA;ACAJ;;ADGE;EACE,SAAA;EACA,yBAAA;EACA,cELS;EFMT,0CEZQ;ADYZ;;ADGE;;;;;;;EAQE,iCExBS;ADuBb;;ADIE;EACE,SAAA;EACA,UAAA;ACDJ;;ADIE;EACE,+BAAA;ACDJ;;ADOI;EAEE,0BAAA;EAGA,WAAA;EACA,sBAAA;ACPN;ADQM;EACE,WAAA;ACNR;ADUI;EACE,cAAA;ACRN;;ADaI;EAEE,0BAAA;EAEA,cAAA;EAEA,WAAA;EACA,sBAAA;ACbN;ADcM;EACE,WAAA;ACZR;;ADmBE;EACE,gBAAA;AChBJ;;ADmBE;EACE,gBAAA;EAEA,YAAA;EACA,iBAAA;EACA,eAAA;ACjBJ;;AAlEA;EACI,aAAA;EACA,mBAAA;EAEA,YAAA;EACA,cAAA;EAEA,wDAAA;EACA,gDAAA;EAEA,yBAAA;AAkEJ;AA9DI;EACI,aAAA;EACA,sBAAA;EAEA,gBAAA;EAEA,YAAA;EAEA,yBAAA;AA6DR;AA1DI;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,yBAAA;EAEA,gBAAA;EAGA,aAAA;AAuDR","sourcesContent":["@import './Vars.scss';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  a:link,\r\n  a:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    background-color: $amarillo-pastel;\r\n    color: $dark-color;\r\n    font-family: $text-font;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    \r\n    font-family: $title-font;\r\n  }\r\n  \r\n  figure {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  section {\r\n    min-height: calc(100vh - 300px);\r\n    \r\n  }\r\n\r\n\r\n  .favorito{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n\r\n      width: 20px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 27px;\r\n      }\r\n    }\r\n\r\n    .seleccionado{\r\n      color: #FECC5B;\r\n    }\r\n\r\n  }\r\n  .trash{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n      color:#EC5853;\r\n\r\n      width: 15px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 20px;\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n\r\n  .layout{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .cargando{\r\n    margin: 10px 50%;\r\n\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n  }","@import '../App.scss';\r\n\r\n.billetera-section{\r\n    display: flex;\r\n    flex-direction: row;\r\n    \r\n    margin: auto;\r\n    max-width: 80%;\r\n\r\n    -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.79); \r\n    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.79);\r\n    \r\n    background-color: #FFFFFF;\r\n\r\n    \r\n\r\n    .billetera{\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        overflow: hidden;\r\n\r\n        width: 500px;\r\n\r\n        background-color: #F2F2F2;\r\n    }\r\n\r\n    .page-section{\r\n        \r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        \r\n        background-color:#FFFFFF ;\r\n        \r\n        overflow: hidden;\r\n\r\n        \r\n        width: 1000px;\r\n        \r\n    }\r\n}","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n\r\n$amarillo-pastel: #FECC5B;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/PageSection.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/PageSection.scss ***!
  \************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section {\n  width: 100%;\n}\n.section .form-section {\n  display: flex;\n  justify-content: start;\n  flex-direction: row;\n}\n.section .form-section .datos-billetera {\n  width: 50%;\n  margin-left: 10px;\n}\n.section .form-section .datos-billetera .nombre {\n  font-size: 2em;\n  font-weight: 800;\n  margin-bottom: 30px;\n}\n.section .form-section .datos-billetera .balance {\n  border-bottom: 2px solid #FECC5B;\n  font-size: 0.6em;\n  font-weight: 800;\n  margin-bottom: 0;\n}\n.section .form-section .datos-billetera .monto {\n  font-size: 1.6em;\n  font-weight: 800;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.section .form-section .datos-billetera button {\n  cursor: pointer;\n  border: 1px solid #8d8d8d !important;\n  width: 70px;\n  height: 25px;\n  margin-top: 10px;\n  color: #000000;\n  font-weight: 800;\n  font-size: 0.8em;\n  background-color: #FECC5B;\n}\n.section .form-section .datos-billetera button:hover {\n  filter: brightness(0.95);\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/components/PageSection.scss"],"names":[],"mappings":"AACA;EACI,WAAA;AAAJ;AAII;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAFR;AAIQ;EAEI,UAAA;EAEA,iBAAA;AAJZ;AAMY;EACI,cAAA;EACA,gBAAA;EAEA,mBAAA;AALhB;AASY;EAEI,gCAAA;EAEA,gBAAA;EACA,gBAAA;EAEA,gBAAA;AAVhB;AAaY;EAEI,gBAAA;EACA,gBAAA;EAEA,aAAA;EACA,gBAAA;AAbhB;AAiBY;EAGI,eAAA;EAEA,oCAAA;EAEA,WAAA;EACA,YAAA;EACA,gBAAA;EAEA,cAAA;EACA,gBAAA;EACA,gBAAA;EAGA,yBAAA;AAtBhB;AAyBgB;EACI,wBAAA;AAvBpB","sourcesContent":["\r\n.section{\r\n    width: 100%;\r\n    \r\n    \r\n\r\n    .form-section{\r\n        display: flex;\r\n        justify-content: start;\r\n        flex-direction: row;\r\n\r\n        .datos-billetera{\r\n\r\n            width: 50%;\r\n\r\n            margin-left: 10px;\r\n\r\n            .nombre{\r\n                font-size: 2em;\r\n                font-weight: 800;\r\n                \r\n                margin-bottom: 30px;\r\n                \r\n            }\r\n\r\n            .balance{\r\n                \r\n                border-bottom: 2px solid #FECC5B;\r\n                \r\n                font-size: 0.6em;\r\n                font-weight: 800;\r\n\r\n                margin-bottom: 0;\r\n\r\n            }\r\n            .monto{\r\n                \r\n                font-size: 1.6em;\r\n                font-weight: 800;\r\n                \r\n                margin-top: 0;\r\n                margin-bottom: 0;\r\n        \r\n            }\r\n\r\n            button{\r\n\r\n                \r\n                cursor: pointer;\r\n                \r\n                border: 1px solid #8d8d8d !important;\r\n                \r\n                width: 70px;\r\n                height: 25px;\r\n                margin-top: 10px;\r\n        \r\n                color: #000000;\r\n                font-weight: 800;\r\n                font-size: 0.8em;\r\n        \r\n        \r\n                background-color: #FECC5B;\r\n        \r\n                \r\n                &:hover{\r\n                    filter: brightness(0.95)\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferCard.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferCard.scss ***!
  \*************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: #FECC5B;\n  color: #000000;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n\n.favorito .logo {\n  margin: 10px auto 0px auto;\n  width: 20px;\n  transition: width 0.3s;\n}\n.favorito .logo:hover {\n  width: 27px;\n}\n.favorito .seleccionado {\n  color: #FECC5B;\n}\n\n.trash .logo {\n  margin: 10px auto 0px auto;\n  color: #EC5853;\n  width: 15px;\n  transition: width 0.3s;\n}\n.trash .logo:hover {\n  width: 20px;\n}\n\n.layout {\n  margin-top: 10px;\n}\n\n.cargando {\n  margin: 10px 50%;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.card-transferencia {\n  display: flex;\n  flex-direction: row;\n  background-color: #FFFFFF;\n  border: 2px solid #8d8d8d;\n  width: 90% !important;\n  margin: 10px auto;\n}\n.card-transferencia .tipo {\n  width: 10%;\n  width: 25px;\n  height: 25px;\n  margin: auto;\n  border-radius: 20px;\n}\n.card-transferencia .tipo .texto {\n  font-size: 1em;\n  font-weight: 800;\n  text-align: center;\n}\n.card-transferencia .verde-borde {\n  border: 2px solid #77dd77;\n}\n.card-transferencia .rojo-borde {\n  border: 2px solid #df4d49;\n}\n.card-transferencia .verde-texto {\n  color: #77dd77 !important;\n}\n.card-transferencia .rojo-texto {\n  color: #df4d49 !important;\n}\n.card-transferencia .contenido {\n  width: 70%;\n  display: flex;\n  justify-content: center;\n}\n.card-transferencia .contenido .datos {\n  width: 100%;\n  margin-left: 10px;\n}\n.card-transferencia .contenido .datos .nombre {\n  color: #8d8d8d;\n  font-size: 1em;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.card-transferencia .contenido .datos .monto {\n  color: #000000;\n  font-size: 1.1em;\n  font-weight: 800;\n  margin-top: 0px;\n}\n.card-transferencia .contenido .datos .fecha {\n  color: #c0c0c0;\n  font-size: 0.7em;\n  font-weight: 800;\n  margin-top: 0px;\n}\n.card-transferencia .acciones {\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.card-transferencia .acciones .favorito {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.2em;\n  height: 50%;\n}\n.card-transferencia .acciones .favorito:hover {\n  background-color: #FECC5B;\n}\n.card-transferencia .acciones .borrar {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.2em;\n  height: 50%;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/components/TransferCard.scss","webpack://./src/assets/styles/Vars.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;ACAJ;;ADGE;;EAEE,cAAA;EACA,qBAAA;ACAJ;;ADGE;EACE,SAAA;EACA,yBAAA;EACA,cELS;EFMT,0CEZQ;ADYZ;;ADGE;;;;;;;EAQE,iCExBS;ADuBb;;ADIE;EACE,SAAA;EACA,UAAA;ACDJ;;ADIE;EACE,+BAAA;ACDJ;;ADOI;EAEE,0BAAA;EAGA,WAAA;EACA,sBAAA;ACPN;ADQM;EACE,WAAA;ACNR;ADUI;EACE,cAAA;ACRN;;ADaI;EAEE,0BAAA;EAEA,cAAA;EAEA,WAAA;EACA,sBAAA;ACbN;ADcM;EACE,WAAA;ACZR;;ADmBE;EACE,gBAAA;AChBJ;;ADmBE;EACE,gBAAA;EAEA,YAAA;EACA,iBAAA;EACA,eAAA;ACjBJ;;AAlEA;EAEI,aAAA;EACA,mBAAA;EAGA,yBAAA;EACA,yBAAA;EAEA,qBAAA;EACA,iBAAA;AAiEJ;AA/DI;EACI,UAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;EAGA,mBAAA;AA6DR;AA3DQ;EAEI,cAAA;EACA,gBAAA;EAEA,kBAAA;AA2DZ;AAnDI;EACI,yBAAA;AAqDR;AAlDI;EACI,yBAAA;AAoDR;AAjDI;EACI,yBAAA;AAmDR;AAhDI;EACI,yBAAA;AAkDR;AA9CI;EACI,UAAA;EAEA,aAAA;EACA,uBAAA;AA+CR;AA7CQ;EACI,WAAA;EAEA,iBAAA;AA8CZ;AA5CY;EACI,cAAA;EAEA,cAAA;EACA,gBAAA;EAEA,kBAAA;AA4ChB;AAzCY;EACI,cAAA;EAEA,gBAAA;EACA,gBAAA;EAEA,eAAA;AAyChB;AAtCY;EACI,cAAA;EAEA,gBAAA;EACA,gBAAA;EAEA,eAAA;AAsChB;AAjCI;EACI,UAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;AAkCR;AAhCQ;EACI,eAAA;EAEA,kBAAA;EACA,gBAAA;EACA,WAAA;AAiCZ;AA/BY;EACI,yBAAA;AAiChB;AA7BQ;EACI,eAAA;EACA,kBAAA;EAEA,gBAAA;EACA,WAAA;AA8BZ","sourcesContent":["@import './Vars.scss';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  a:link,\r\n  a:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    background-color: $amarillo-pastel;\r\n    color: $dark-color;\r\n    font-family: $text-font;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    \r\n    font-family: $title-font;\r\n  }\r\n  \r\n  figure {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  section {\r\n    min-height: calc(100vh - 300px);\r\n    \r\n  }\r\n\r\n\r\n  .favorito{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n\r\n      width: 20px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 27px;\r\n      }\r\n    }\r\n\r\n    .seleccionado{\r\n      color: #FECC5B;\r\n    }\r\n\r\n  }\r\n  .trash{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n      color:#EC5853;\r\n\r\n      width: 15px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 20px;\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n\r\n  .layout{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .cargando{\r\n    margin: 10px 50%;\r\n\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n  }","@import '../App.scss';\r\n\r\n.card-transferencia{\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    \r\n    background-color:#FFFFFF ;\r\n    border: 2px solid #8d8d8d;\r\n\r\n    width: 90% !important;\r\n    margin: 10px auto;\r\n\r\n    .tipo{\r\n        width: 10%;\r\n\r\n        width: 25px;\r\n        height: 25px;\r\n\r\n        margin: auto;\r\n\r\n        \r\n        border-radius: 20px;\r\n\r\n        .texto{\r\n            \r\n            font-size: 1em;\r\n            font-weight: 800;\r\n\r\n            text-align: center;\r\n        }\r\n\r\n\r\n        \r\n\r\n    }\r\n\r\n    .verde-borde{\r\n        border: 2px solid #77dd77;\r\n    }\r\n\r\n    .rojo-borde{\r\n        border: 2px solid #df4d49;\r\n    }\r\n\r\n    .verde-texto{\r\n        color: #77dd77 !important;\r\n    }\r\n\r\n    .rojo-texto{\r\n        color:#df4d49 !important;\r\n    }\r\n\r\n    \r\n    .contenido{\r\n        width: 70%;\r\n        \r\n        display: flex;\r\n        justify-content: center;\r\n        \r\n        .datos{\r\n            width: 100%;\r\n\r\n            margin-left: 10px;\r\n\r\n            .nombre{\r\n                color: #8d8d8d;\r\n\r\n                font-size: 1em;\r\n                font-weight: 600;\r\n\r\n                margin-bottom: 5px;\r\n            }\r\n\r\n            .monto{\r\n                color: #000000;\r\n\r\n                font-size: 1.1em;\r\n                font-weight: 800;\r\n\r\n                margin-top: 0px;\r\n\r\n            }\r\n            .fecha{\r\n                color: #c0c0c0;\r\n\r\n                font-size: 0.7em;\r\n                font-weight: 800;\r\n\r\n                margin-top: 0px;\r\n\r\n            }\r\n        }\r\n    }\r\n    .acciones{\r\n        width: 20%;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n\r\n        .favorito{\r\n            cursor: pointer;\r\n\r\n            text-align: center;\r\n            font-size: 1.2em;\r\n            height: 50%;\r\n\r\n            &:hover{\r\n                background-color: #FECC5B;\r\n            }\r\n\r\n        }\r\n        .borrar{\r\n            cursor: pointer;\r\n            text-align: center;\r\n\r\n            font-size: 1.2em;\r\n            height: 50%;\r\n\r\n           \r\n        }\r\n\r\n    }\r\n\r\n    \r\n}","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n\r\n$amarillo-pastel: #FECC5B;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferForm.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferForm.scss ***!
  \*************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: #FECC5B;\n  color: #000000;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n\n.favorito .logo {\n  margin: 10px auto 0px auto;\n  width: 20px;\n  transition: width 0.3s;\n}\n.favorito .logo:hover {\n  width: 27px;\n}\n.favorito .seleccionado {\n  color: #FECC5B;\n}\n\n.trash .logo {\n  margin: 10px auto 0px auto;\n  color: #EC5853;\n  width: 15px;\n  transition: width 0.3s;\n}\n.trash .logo:hover {\n  width: 20px;\n}\n\n.layout {\n  margin-top: 10px;\n}\n\n.cargando {\n  margin: 10px 50%;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.formulario-transferencia {\n  width: 50%;\n  padding-left: 30px;\n}\n.formulario-transferencia h2 {\n  margin-top: 30px;\n}\n.formulario-transferencia .section-input {\n  margin-top: 80px;\n  /* LABEL ======================================= */\n  /* active state */\n  /* BOTTOM BARS ================================= */\n  /* active state */\n  /* HIGHLIGHTER ================================== */\n  /* active state */\n  /* ANIMATIONS ================ */\n}\n.formulario-transferencia .section-input .group {\n  position: relative;\n  margin-bottom: 30px;\n}\n.formulario-transferencia .section-input input {\n  font-size: 14spx;\n  padding: 10px 10px 10px 0px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #8d8d8d;\n}\n.formulario-transferencia .section-input input:focus {\n  outline: none;\n}\n.formulario-transferencia .section-input label {\n  color: #999;\n  font-size: 20px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n.formulario-transferencia .section-input input:focus ~ label, .formulario-transferencia .section-input input:valid ~ label {\n  top: -20px;\n  font-size: 15px;\n  color: #8d8d8d;\n}\n.formulario-transferencia .section-input .bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n.formulario-transferencia .section-input .bar:before, .formulario-transferencia .section-input .bar:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #FECC5B;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n.formulario-transferencia .section-input .bar:before {\n  left: 50%;\n}\n.formulario-transferencia .section-input .bar:after {\n  right: 50%;\n}\n.formulario-transferencia .section-input input:focus ~ .bar:before, .formulario-transferencia .section-input input:focus ~ .bar:after {\n  width: 50%;\n}\n.formulario-transferencia .section-input .highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.formulario-transferencia .section-input input:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #FECC5B;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #FECC5B;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n@keyframes inputHighlighter {\n  from {\n    background: #FECC5B;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n.formulario-transferencia button {\n  cursor: pointer;\n  border: 1px solid #8d8d8d !important;\n  width: 70px;\n  height: 25px;\n  margin-top: 0px;\n  color: #000000;\n  font-weight: 800;\n  font-size: 0.8em;\n  background-color: #FECC5B;\n}\n.formulario-transferencia button:hover {\n  filter: brightness(0.95);\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/components/TransferForm.scss","webpack://./src/assets/styles/Vars.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;ACAJ;;ADGE;;EAEE,cAAA;EACA,qBAAA;ACAJ;;ADGE;EACE,SAAA;EACA,yBAAA;EACA,cELS;EFMT,0CEZQ;ADYZ;;ADGE;;;;;;;EAQE,iCExBS;ADuBb;;ADIE;EACE,SAAA;EACA,UAAA;ACDJ;;ADIE;EACE,+BAAA;ACDJ;;ADOI;EAEE,0BAAA;EAGA,WAAA;EACA,sBAAA;ACPN;ADQM;EACE,WAAA;ACNR;ADUI;EACE,cAAA;ACRN;;ADaI;EAEE,0BAAA;EAEA,cAAA;EAEA,WAAA;EACA,sBAAA;ACbN;ADcM;EACE,WAAA;ACZR;;ADmBE;EACE,gBAAA;AChBJ;;ADmBE;EACE,gBAAA;EAEA,YAAA;EACA,iBAAA;EACA,eAAA;ACjBJ;;AAnEA;EACI,UAAA;EAEA,kBAAA;AAqEJ;AAlEI;EACI,gBAAA;AAoER;AAlEI;EACI,gBAAA;EAmBE,kDAAA;EAcA,iBAAA;EAOA,kDAAA;EAoBA,iBAAA;EAKA,mDAAA;EAWA,iBAAA;EAOA,gCAAA;AARV;AAtEQ;EACI,kBAAA;EACA,mBAAA;AAwEZ;AAtEU;EACE,gBAAA;EACA,2BAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,gCAAA;AAwEZ;AAtEU;EAAgB,aAAA;AAyE1B;AAtEU;EACE,WAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;EACA,SAAA;EACA,yBAAA;EACA,8BAAA;EACA,iCAAA;AAwEZ;AApEU;EACE,UAAA;EACA,eAAA;EACA,cAAA;AAsEZ;AAlEU;EAAQ,kBAAA;EAAmB,cAAA;EAAe,YAAA;AAuEpD;AAtEU;EACE,WAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,8BAAA;EACA,iCAAA;AAwEZ;AAtEU;EACE,SAAA;AAwEZ;AAtEU;EACE,UAAA;AAwEZ;AApEU;EACE,UAAA;AAsEZ;AAlEU;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,QAAA;EACA,OAAA;EACA,oBAAA;EACA,YAAA;AAoEZ;AAhEU;EACE,6CAAA;EACA,0CAAA;EACA,qCAAA;AAkEZ;AA9DU;EACI;IAAO,mBAAA;EAiEnB;EAhEU;IAAM,QAAA;IAAS,uBAAA;EAoEzB;AACF;AAnEU;EACI;IAAO,mBAAA;EAsEnB;EArEU;IAAM,QAAA;IAAS,uBAAA;EAyEzB;AACF;AAxEU;EACI;IAAO,mBAAA;EA2EnB;EA1EU;IAAM,QAAA;IAAS,uBAAA;EA8EzB;AACF;AA1EI;EAGE,eAAA;EAEA,oCAAA;EAEA,WAAA;EACA,YAAA;EACA,eAAA;EAEA,cAAA;EACA,gBAAA;EACA,gBAAA;EAGA,yBAAA;AAqEN;AAlEM;EACI,wBAAA;AAoEV","sourcesContent":["@import './Vars.scss';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  a:link,\r\n  a:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    background-color: $amarillo-pastel;\r\n    color: $dark-color;\r\n    font-family: $text-font;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    \r\n    font-family: $title-font;\r\n  }\r\n  \r\n  figure {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  section {\r\n    min-height: calc(100vh - 300px);\r\n    \r\n  }\r\n\r\n\r\n  .favorito{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n\r\n      width: 20px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 27px;\r\n      }\r\n    }\r\n\r\n    .seleccionado{\r\n      color: #FECC5B;\r\n    }\r\n\r\n  }\r\n  .trash{\r\n    .logo{\r\n\r\n      margin: 10px auto 0px auto;\r\n\r\n      color:#EC5853;\r\n\r\n      width: 15px;\r\n      transition: width 0.3s;\r\n      &:hover{\r\n        width: 20px;\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n\r\n  .layout{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .cargando{\r\n    margin: 10px 50%;\r\n\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n  }","@import '../App.scss';\r\n.formulario-transferencia{\r\n    width: 50%;\r\n\r\n    padding-left: 30px;\r\n\r\n   \r\n    h2{\r\n        margin-top: 30px;\r\n    }\r\n    .section-input{\r\n        margin-top: 80px;\r\n\r\n        \r\n\r\n\r\n        .group \t\t\t  { \r\n            position:relative; \r\n            margin-bottom:30px; \r\n          }\r\n          input \t\t\t\t{\r\n            font-size:14spx;\r\n            padding:10px 10px 10px 0px;\r\n            display:block;\r\n            width:300px;\r\n            border:none;\r\n            border-bottom:1px solid #8d8d8d;\r\n          }\r\n          input:focus \t\t{ outline:none; }\r\n          \r\n          /* LABEL ======================================= */\r\n          label \t\t\t\t {\r\n            color:#999; \r\n            font-size:20px;\r\n            font-weight:normal;\r\n            position:absolute;\r\n            pointer-events:none;\r\n            left:0px;\r\n            top:10px;\r\n            transition:0.2s ease all; \r\n            -moz-transition:0.2s ease all; \r\n            -webkit-transition:0.2s ease all;\r\n          }\r\n          \r\n          /* active state */\r\n          input:focus ~ label, input:valid ~ label \t\t{\r\n            top:-20px;\r\n            font-size:15px;\r\n            color:#8d8d8d;\r\n          }\r\n          \r\n          /* BOTTOM BARS ================================= */\r\n          .bar \t{ position:relative; display:block; width:300px; }\r\n          .bar:before, .bar:after \t{\r\n            content:'';\r\n            height:2px; \r\n            width:0;\r\n            bottom:1px; \r\n            position:absolute;\r\n            background:#FECC5B; \r\n            transition:0.2s ease all; \r\n            -moz-transition:0.2s ease all; \r\n            -webkit-transition:0.2s ease all;\r\n          }\r\n          .bar:before {\r\n            left:50%;\r\n          }\r\n          .bar:after {\r\n            right:50%; \r\n          }\r\n          \r\n          /* active state */\r\n          input:focus ~ .bar:before, input:focus ~ .bar:after {\r\n            width:50%;\r\n          }\r\n          \r\n          /* HIGHLIGHTER ================================== */\r\n          .highlight {\r\n            position:absolute;\r\n            height:60%; \r\n            width:100px; \r\n            top:25%; \r\n            left:0;\r\n            pointer-events:none;\r\n            opacity:0.5;\r\n          }\r\n          \r\n          /* active state */\r\n          input:focus ~ .highlight {\r\n            -webkit-animation:inputHighlighter 0.3s ease;\r\n            -moz-animation:inputHighlighter 0.3s ease;\r\n            animation:inputHighlighter 0.3s ease;\r\n          }\r\n          \r\n          /* ANIMATIONS ================ */\r\n          @-webkit-keyframes inputHighlighter {\r\n              from { background:#FECC5B; }\r\n            to \t{ width:0; background:transparent; }\r\n          }\r\n          @-moz-keyframes inputHighlighter {\r\n              from { background:#FECC5B; }\r\n            to \t{ width:0; background:transparent; }\r\n          }\r\n          @keyframes inputHighlighter {\r\n              from { background:#FECC5B; }\r\n            to \t{ width:0; background:transparent; }\r\n          }\r\n    }\r\n\r\n\r\n    button{\r\n\r\n                \r\n      cursor: pointer;\r\n      \r\n      border: 1px solid #8d8d8d !important;\r\n      \r\n      width: 70px;\r\n      height: 25px;\r\n      margin-top: 0px;\r\n\r\n      color: #000000;\r\n      font-weight: 800;\r\n      font-size: 0.8em;\r\n\r\n\r\n      background-color: #FECC5B;\r\n\r\n      \r\n      &:hover{\r\n          filter: brightness(0.95)\r\n      }\r\n  }\r\n}","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n\r\n$amarillo-pastel: #FECC5B;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferTable.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferTable.scss ***!
  \**************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".transfer-section .transfers-list {\n  max-height: 500px;\n  overflow: auto;\n}\n.transfer-section h3 {\n  font-size: 1.5em;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/components/TransferTable.scss"],"names":[],"mappings":"AAGI;EACI,iBAAA;EACA,cAAA;AAFR;AAKI;EACI,gBAAA;EACA,kBAAA;AAHR","sourcesContent":[".transfer-section{\r\n    \r\n\r\n    .transfers-list{\r\n        max-height: 500px;\r\n        overflow: auto;\r\n    }\r\n\r\n    h3{\r\n        font-size: 1.5em;\r\n        text-align: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/styles/components/BilleteraCard.scss":
/*!*********************************************************!*\
  !*** ./src/assets/styles/components/BilleteraCard.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./BilleteraCard.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraCard.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraCard_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraCard_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/BilleteraForm.scss":
/*!*********************************************************!*\
  !*** ./src/assets/styles/components/BilleteraForm.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./BilleteraForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraForm.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraForm_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraForm_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/BilleteraList.scss":
/*!*********************************************************!*\
  !*** ./src/assets/styles/components/BilleteraList.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./BilleteraList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/BilleteraList.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraList_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BilleteraList_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/Billeteras.scss":
/*!******************************************************!*\
  !*** ./src/assets/styles/components/Billeteras.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Billeteras_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Billeteras.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Billeteras.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Billeteras_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Billeteras_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/PageSection.scss":
/*!*******************************************************!*\
  !*** ./src/assets/styles/components/PageSection.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PageSection_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./PageSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/PageSection.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PageSection_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_PageSection_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/TransferCard.scss":
/*!********************************************************!*\
  !*** ./src/assets/styles/components/TransferCard.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./TransferCard.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferCard.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferCard_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferCard_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/TransferForm.scss":
/*!********************************************************!*\
  !*** ./src/assets/styles/components/TransferForm.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./TransferForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferForm.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferForm_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferForm_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/TransferTable.scss":
/*!*********************************************************!*\
  !*** ./src/assets/styles/components/TransferTable.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./TransferTable.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/TransferTable.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferTable_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TransferTable_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_containers_Billeteras_jsx.bundle.js.map