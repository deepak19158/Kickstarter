import React, { Component } from "react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import RequestRow from "../../../components/RequestRow";

class Requests extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestCount().call();
    const approvalCount = await campaign.methods.approvalCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((Element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    return {
      address,
      requests,
      requestCount,
      approvalCount,
    };
  }

  renderRow() {
    return this.props.requests.map((req, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          address={this.props.address}
          request={req}
          approvalCount={this.props.approvalCount}
        />
      );
    });
  }

  state = {};
  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button floated="right" primary>
              Add Request
            </Button>
          </a>
        </Link>
        <h3>Request List</h3>
        <Link route={`/campaigns/${this.props.address}`}>
          <a>back </a>
        </Link>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Recipient</Table.HeaderCell>
              <Table.HeaderCell>Approval Count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRow()}</Table.Body>
        </Table>

        <h5>Found {this.props.requestCount} Requests</h5>
      </Layout>
    );
  }
}

export default Requests;
