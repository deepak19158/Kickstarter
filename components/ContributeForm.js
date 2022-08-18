import web3 from "../ethereum/web3";
import React, { Component } from "react";
import Campaign from "../ethereum/campaign";
import { Form, Label, Button, Input } from "semantic-ui-react";
import { Router } from "../routes";

class contributeForm extends Component {
  state = {
    value: "",
    loading: false,
    error: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, error: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({ loading: false, value: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <h3>
            <label>Contribute to the campaign</label>
            <Input
              value={this.state.value}
              onChange={(event) => {
                try {
                  this.setState({ value: event.target.value });
                } catch (error) {
                  this.setState({ error: error.message });
                }
              }}
              label="ether"
              labelPosition="right"
            ></Input>
          </h3>
        </Form.Field>
        <Form.Field>
          <p>{this.state.error}</p>
        </Form.Field>
        <Button primary loading={this.state.loading}>
          Contribute
        </Button>
      </Form>
    );
  }
}

export default contributeForm;
