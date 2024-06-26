"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarUser = exports.modificarUser = exports.logueoUser = exports.listarUser = exports.eliminarUser = exports.crearUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _browser = require("../message/browser.js");
var _dbMsql = _interopRequireDefault(require("../config/db.msql.js"));
var _dotenv = require("dotenv");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
//paso 16 creamos la carpeta de controllers y el este archivo controllers.user.js
//paso 17

//6 paso, cambiamos este paso del routes.user.js

(0, _dotenv.config)();
var crearUser = exports.crearUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var nombre, usuario, claveSinCifrar, hash, clave, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          nombre = req.body.nombre;
          usuario = req.body.usuario;
          claveSinCifrar = req.body.clave;
          _context.prev = 3;
          _context.next = 6;
          return _bcrypt["default"].hash(claveSinCifrar, 2);
        case 6:
          hash = _context.sent;
          clave = hash;
          _context.next = 10;
          return _dbMsql["default"].query("CALL sp_CrearUsuario('".concat(nombre, "', '").concat(usuario, "', '").concat(clave, "'); "));
        case 10:
          respuesta = _context.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _browser.success)(req, res, 201, "Usuario creado");
          } else {
            (0, _browser.error)(req, res, 400, "No se pudo agregar el nuevo usuario");
          }
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          (0, _browser.error)(req, res, 400, _context.t0);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 14]]);
  }));
  return function crearUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var mostrarUser = exports.mostrarUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params['id'];
          _context2.prev = 1;
          _context2.next = 4;
          return _dbMsql["default"].query("CALL sp_MostrarUsuario(".concat(id, "); "));
        case 4:
          respuesta = _context2.sent;
          (0, _browser.success)(req, res, 200, respuesta[0]);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          (0, _browser.error)(req, res, 500, _context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function mostrarUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var listarUser = exports.listarUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _dbMsql["default"].query("CALL sp_ListarUsuario(); ");
        case 3:
          respuesta = _context3.sent;
          (0, _browser.success)(req, res, 200, respuesta[0]);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          (0, _browser.error)(req, res, 500, _context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function listarUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var modificarUser = exports.modificarUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, nombre, usuario, claveSinCifrar, clave, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          nombre = req.body.nombre;
          usuario = req.body.usuario;
          claveSinCifrar = req.body.clave;
          clave = claveSinCifrar;
          _context4.prev = 5;
          _context4.next = 8;
          return _dbMsql["default"].query("CALL sp_ModificarUsuario(".concat(id, ", '").concat(nombre, "', '").concat(usuario, "', '").concat(clave, "'); "));
        case 8:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _browser.success)(req, res, 201, "Usuario Modificado: " + usuario);
          } else {
            (0, _browser.error)(req, res, 400, "No se pudo modificar el usuario: " + usuario);
          }
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](5);
          (0, _browser.error)(req, res, 400, _context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[5, 12]]);
  }));
  return function modificarUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var eliminarUser = exports.eliminarUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _dbMsql["default"].query("CALL sp_EliminarUsuario(".concat(id, ") "));
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _browser.success)(req, res, 201, "Usuario Eliminado:");
          } else {
            (0, _browser.error)(req, res, 400, "No se pudo elimimar el usuario:");
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          (0, _browser.error)(req, res, 400, _context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var logueoUser = exports.logueoUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, usuario, clave, respuesta, match, payload, token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, usuario = _req$body.usuario, clave = _req$body.clave; // const hash = await bcrypt.hash(clave, 2);
          _context6.prev = 1;
          _context6.next = 4;
          return _dbMsql["default"].query("CALL sp_BuscarUsuario('".concat(usuario, "'); "));
        case 4:
          respuesta = _context6.sent;
          if (!(respuesta[0][0] == 0)) {
            _context6.next = 8;
            break;
          }
          (0, _browser.error)(req, res, 404, "Usuario no existe");
          return _context6.abrupt("return");
        case 8:
          _context6.next = 10;
          return _bcrypt["default"].compare(clave, respuesta[0][0][0].CLAVE);
        case 10:
          match = _context6.sent;
          if (match) {
            _context6.next = 14;
            break;
          }
          (0, _browser.error)(req, res, 401, "Clave Errada");
          return _context6.abrupt("return");
        case 14:
          payload = {
            "usuario": usuario,
            "nombre": respuesta[0][0][0].NOMBRE
          };
          token = _jsonwebtoken["default"].sign(payload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
          });
          (0, _browser.success)(req, res, 200, {
            token: token
          });
          _context6.next = 22;
          break;
        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](1);
          (0, _browser.error)(req, res, 500, "Error en el servidor, por favor intente de nuevo mas tarde");
        case 22:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 19]]);
  }));
  return function logueoUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();