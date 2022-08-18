import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import ContributeForm from "../../components/ContributeForm";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

class Show extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  card = () => {
    const items = [
      {
        header: this.props.minimumContribution,
        description: "Minimum amout requried to become a contributor",
        meta: "in Wei",
      },
      {
        header: web3.utils.fromWei(this.props.balance, "ether"),
        description:
          "The amoutn of ether currently present in campaign contract",
        meta: "Balance(ether) ",
      },
      {
        header: this.props.requestsCount,
        description: "The total amount of request made in the campaign",
        meta: "Total Number of Request",
      },
      {
        header: this.props.approversCount,
        description: "The total number of contributer in the campaign",
        meta: "Total Number of Contributer",
      },
      {
        header: this.props.manager,
        description: "Address of the manger who created the campaign",
        meta: "Address of the Manager",
        style: { overflowWrap: "break-word" },
      },
    ];

    return <Card.Group items={items} />;
  };
  render() {
    return (
      <Layout>
        <h1>Campagin show </h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.card()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default Show;
