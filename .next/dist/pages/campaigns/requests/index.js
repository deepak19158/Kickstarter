"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\google chrome download\\blck\\kickstarter\\pages\\campaigns\\requests\\index.js?entry";


var Requests = function (_Component) {
  (0, _inherits3.default)(Requests, _Component);

  function Requests() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Requests);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Requests.__proto__ || (0, _getPrototypeOf2.default)(Requests)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Requests, [{
    key: "renderRow",
    value: function renderRow() {
      var _this2 = this;

      return this.props.requests.map(function (req, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          address: _this2.props.address,
          request: req,
          approvalCount: _this2.props.approvalCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Add Request"))), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Request List"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "back ")), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "ID"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Description"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Amount"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Recipient"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Approval Count"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Approve"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Finalize"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.renderRow())), _react2.default.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Found ", this.props.requestCount, " Requests"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approvalCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approvalCount().call();

              case 7:
                approvalCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (Element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount,
                  approvalCount: approvalCount
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Requests;
}(_react.Component);

exports.default = Requests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkljb24iLCJMYWJlbCIsIk1lbnUiLCJUYWJsZSIsIkJ1dHRvbiIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0cyIsInN0YXRlIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcSIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmFsQ291bnQiLCJyZW5kZXJSb3ciLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTyxBQUFNLEFBQU87O0FBQ25DLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7OztnTixBQXFDSixRLEFBQVE7Ozs7O2dDQWRJO21CQUNWOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxPQUFVLEFBQzdDOytCQUNFLEFBQUM7ZUFBRCxBQUNPLEFBQ0w7Y0FGRixBQUVNLEFBQ0o7bUJBQVMsT0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO21CQUpGLEFBSVcsQUFDVDt5QkFBZSxPQUFBLEFBQUssTUFMdEIsQUFLNEI7O3NCQUw1Qjt3QkFERixBQUNFLEFBUUg7QUFSRztBQUNFLFNBREY7QUFGSixBQUFPLEFBV1IsT0FYUTs7Ozs2QkFjQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QjtvQkFBQTtzQkFBQTtBQUFBO1NBSE4sQUFDRSxBQUNFLEFBQ0UsQUFLSixrQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FSRixBQVFFLEFBQ0EsaUNBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVkosQUFTRSxBQUNFLEFBRUYsMkJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDJCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDhCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLG1DQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBTkYsQUFNRSxBQUNBLDRCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBLFNBVE4sQUFDRSxBQUNFLEFBT0UsQUFHSiwrQkFBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQWE7QUFBYjtBQUFBLGNBeEJKLEFBWUUsQUFZRSxBQUFhLEFBQUssQUFHcEIsK0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVcsZUFBQSxBQUFLLE1BQWhCLEFBQXNCLGNBNUIxQixBQUNFLEFBMkJFLEFBR0w7Ozs7OzRHLEFBckU0Qjs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE0sQUFBbEIsQUFDRjtBLDJCQUFXLHdCLEFBQUEsQUFBUzs7dUJBQ0MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0IsQUFBakIsQUFBbUM7O21CQUF4RDtBOzt1QkFDc0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZ0IsQUFBakIsQUFBaUM7O21CQUF2RDtBOzt5Q0FFaUIsQUFBUSxVQUN2QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0csT0FESCxBQUVHLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3ZCO3lCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDekM7QSxBQUxrQixBQUNyQixpQkFBQSxDQURxQjs7bUJBQWpCO0E7OzJCQVFDLEFBRUw7NEJBRkssQUFHTDtnQ0FISyxBQUlMO2lDLEFBSks7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUROLEEsQUF6RXVCOztrQkF5RXZCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovZ29vZ2xlIGNocm9tZSBkb3dubG9hZC9ibGNrL2tpY2tzdGFydGVyIn0=