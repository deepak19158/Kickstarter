import React, { Component } from "react";
import { Button, Icon, Label, Menu, Table } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  state = {
    loadingApprove: false,
    loadingFinalize: false,
    errApprove: "",
    errFinalize: "",
  };

  onApprove = async () => {
    const campaign = Campaign(this.props.address);

    this.setState({ loadingApprove: true, errApprove: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approvalRequest(this.props.id).send({
        from: accounts[0],
      });
    } catch (error) {
      this.setState({ errApprove: error.message });
    }

    this.setState({ loadingApprove: false });
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);

    this.setState({ loadingFinalize: true, errFinalize: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0],
      });
    } catch (error) {
      this.setState({ errFinalize: error.message });
    }

    this.setState({ loadingFinalize: false });
  };

  render() {
    const { Row, Cell } = Table;
    const request = this.props.request;
    return (
      <Row
        disabled={request.complete}
        positive={request.approvalCount >= this.props.approvalCount / 2}
      >
        <Cell>{this.props.id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{this.props.approvalCount}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button
              color="green"
              basic
              loading={this.state.loadingApprove}
              onClick={this.onApprove}
            >
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button
              color="red"
              basic
              loading={this.state.loadingFinalize}
              onClick={this.onFinalize}
            >
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
