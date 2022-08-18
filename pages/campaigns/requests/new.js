import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import web3 from "../../../ethereum/web3";
import Campaign from "../../../ethereum/campaign";
import { Link } from "../../../routes";

class RequestNew extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  state = {
    description: "",
    value: "",
    recepient: "",
    loading: false,
    error: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      this.setState({ loading: true, error: "" });
      await campaign.methods
        .createReuquest(
          this.state.description,
          web3.utils.toWei(this.state.value, "ether"),
          this.state.recepient
        )
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ error: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>back </a>
        </Link>
        <h3>Create New Request</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={(event) => {
                this.setState({ description: event.target.value });
              }}
            ></Input>
          </Form.Field>

          <Form.Field>
            <label>Value </label>
            <Input
              label="Ether"
              labelPosition="right"
              value={this.state.value}
              onChange={(event) => {
                this.setState({ value: event.target.value });
              }}
            ></Input>
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recepient}
              onChange={(event) => {
                this.setState({ recepient: event.target.value });
              }}
            ></Input>
          </Form.Field>
          <Form.Field>
            <p>{this.state.error}</p>
          </Form.Field>
          <Button primary loading={this.state.loading}>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
