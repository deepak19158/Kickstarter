"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\google chrome download\\blck\\kickstarter\\components\\RequestRow.js";


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingApprove: false,
      loadingFinalize: false,
      errApprove: "",
      errFinalize: ""
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loadingApprove: true, errApprove: "" });
              _context.prev = 2;
              _context.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return campaign.methods.approvalRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);

              _this.setState({ errApprove: _context.t0.message });

            case 13:

              _this.setState({ loadingApprove: false });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 10]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loadingFinalize: true, errFinalize: "" });
              _context2.prev = 2;
              _context2.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);

              _this.setState({ errFinalize: _context2.t0.message });

            case 13:

              _this.setState({ loadingFinalize: false });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      var request = this.props.request;
      return _react2.default.createElement(Row, {
        disabled: request.complete,
        positive: request.approvalCount >= this.props.approvalCount / 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, request.approvalCount, "/", this.props.approvalCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "green",
        basic: true,
        loading: this.state.loadingApprove,
        onClick: this.onApprove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "red",
        basic: true,
        loading: this.state.loadingFinalize,
        onClick: this.onFinalize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJJY29uIiwiTGFiZWwiLCJNZW51IiwiVGFibGUiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nQXBwcm92ZSIsImxvYWRpbmdGaW5hbGl6ZSIsImVyckFwcHJvdmUiLCJlcnJGaW5hbGl6ZSIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmFsUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiY29tcGxldGUiLCJhcHByb3ZhbENvdW50IiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQU07O0FBQ3BDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OztvTixBQUNKO3NCQUFRLEFBQ1UsQUFDaEI7dUJBRk0sQUFFVyxBQUNqQjtrQkFITSxBQUdNLEFBQ1o7bUIsQUFKTSxBQUlPO0FBSlAsQUFDTixhLEFBTUYscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0o7QUFESSx5QkFDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQixBQUVyQzs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQUYsQUFBa0IsTUFBTSxZQUg1QixBQUdWLEFBQWMsQUFBb0M7OEJBSHhDOzhCQUFBO3FCQUtlLGNBQUEsQUFBSyxJQUxwQixBQUtlLEFBQVM7O2lCQUExQjtBQUxFLGtDQUFBOzhCQUFBOzhCQU1GLEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NCQUM5QyxTQVBBLEFBTUYsQUFBcUQsQUFDbkQsQUFBUztBQUQwQyxBQUN6RCxlQURJOztpQkFORTs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FVUjs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsWUFBWSxZQVZwQixBQVVSLEFBQWMsQUFBb0I7O2lCQUdwQzs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBYk4sQUFhVixBQUFjLEFBQWtCOztpQkFidEI7aUJBQUE7OEJBQUE7O0FBQUE7K0JBQUE7QSxlLEFBZ0JaLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUNMO0FBREsseUJBQ00sd0JBQVMsTUFBQSxBQUFLLE1BRHBCLEFBQ00sQUFBb0IsQUFFckM7O29CQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFGLEFBQW1CLE1BQU0sYUFINUIsQUFHWCxBQUFjLEFBQXNDOytCQUh6QzsrQkFBQTtxQkFLYyxjQUFBLEFBQUssSUFMbkIsQUFLYyxBQUFTOztpQkFBMUI7QUFMRyxtQ0FBQTsrQkFBQTs4QkFNSCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDOUMsU0FQQyxBQU1ILEFBQXFELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsZUFESTs7aUJBTkc7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBVVQ7O29CQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsYUFWcEIsQUFVVCxBQUFjLEFBQXFCOztpQkFHckM7O29CQUFBLEFBQUssU0FBUyxFQUFFLGlCQWJMLEFBYVgsQUFBYyxBQUFtQjs7aUJBYnRCO2lCQUFBOytCQUFBOztBQUFBO2dDQUFBO0E7Ozs7OzZCQWdCSjtVQUFBLEFBQ0MsTUFERCxBQUNlLHVCQURmLEFBQ0M7VUFERCxBQUNNLE9BRE4sQUFDZSx1QkFEZixBQUNNLEFBQ2I7O1VBQU0sVUFBVSxLQUFBLEFBQUssTUFBckIsQUFBMkIsQUFDM0I7NkJBQ0csY0FBRDtrQkFDWSxRQURaLEFBQ29CLEFBQ2xCO2tCQUFVLFFBQUEsQUFBUSxpQkFBaUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFGaEQsQUFFZ0U7O29CQUZoRTtzQkFBQSxBQUlFO0FBSkY7QUFDRSxPQURGLGtCQUlHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUpkLEFBSUUsQUFBa0IsQUFDbEIscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBTEYsQUFLRSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQU5wQyxBQU1FLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBUEYsQUFPRSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQUEsQUFDVyxlQUFnQixVQUFBLEFBQUssTUFUbEMsQUFRRSxBQUNzQyxBQUV0QyxnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFDRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2xCLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFGRixBQUdFO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNwQjtpQkFBUyxLQUpYLEFBSWdCOztvQkFKaEI7c0JBQUE7QUFBQTtBQUNFLE9BREYsRUFiTixBQVdFLEFBRUksQUFVSiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFDRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2xCLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFGRixBQUdFO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNwQjtpQkFBUyxLQUpYLEFBSWdCOztvQkFKaEI7c0JBQUE7QUFBQTtBQUNFLE9BREYsRUExQlIsQUFDRSxBQXVCRSxBQUVJLEFBWVQ7Ozs7O0EsQUFqRnNCLEFBb0Z6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6IkQ6L2dvb2dsZSBjaHJvbWUgZG93bmxvYWQvYmxjay9raWNrc3RhcnRlciJ9