/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

class Example2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: '',
      usa: ''
    };
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['SELECT2']);

    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  _usa(state) {
    this.setState({
      ...this.state,
      usa: state
    });
  }

  _canada(province) {
    this.setState({
      ...this.state,
      canada: province
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Province in Canada ..."
            onSelect={this._canada.bind(this)}>
            <Option>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
            <Option>New Brunswick</Option>
            <Option>Newfoundland and Labrador</Option>
            <Option>Northwest Territories</Option>
            <Option>Nova Scotia</Option>
            <Option>Nunavut</Option>
            <Option>Ontario</Option>
            <Option>Prince Edward Island</Option>
            <Option>Quebec</Option>
            <Option>Saskatchewan</Option>
            <Option>Yukon</Option>
          </Select>

          <View style={{ height: 10 }}/>

          <Select
            width={250}
            ref="SELECT2"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a State in USA ..."
            onSelect={this._usa.bind(this)}>
            <Option>Alabama</Option>
          	<Option>Alaska</Option>
          	<Option>Arizona</Option>
          	<Option>Arkansas</Option>
          	<Option>California</Option>
          	<Option>Colorado</Option>
          	<Option>Connecticut</Option>
          	<Option>Delaware</Option>
          	<Option>District Of Columbia</Option>
          	<Option>Florida</Option>
          	<Option>Georgia</Option>
          	<Option>Hawaii</Option>
          	<Option>Idaho</Option>
          	<Option>Illinois</Option>
          	<Option>Indiana</Option>
          	<Option>Iowa</Option>
          	<Option>Kansas</Option>
          	<Option>Kentucky</Option>
          	<Option>Louisiana</Option>
          	<Option>Maine</Option>
          	<Option>Maryland</Option>
          	<Option>Massachusetts</Option>
          	<Option>Michigan</Option>
          	<Option>Minnesota</Option>
          	<Option>Mississippi</Option>
          	<Option>Missouri</Option>
          	<Option>Montana</Option>
          	<Option>Nebraska</Option>
          	<Option>Nevada</Option>
          	<Option>New Hampshire</Option>
          	<Option>New Jersey</Option>
          	<Option>New Mexico</Option>
          	<Option>New York</Option>
          	<Option>North Carolina</Option>
          	<Option>North Dakota</Option>
          	<Option>Ohio</Option>
          	<Option>Oklahoma</Option>
          	<Option>Oregon</Option>
          	<Option>Pennsylvania</Option>
          	<Option>Rhode Island</Option>
          	<Option>South Carolina</Option>
          	<Option>South Dakota</Option>
          	<Option>Tennessee</Option>
          	<Option>Texas</Option>
          	<Option>Utah</Option>
          	<Option>Vermont</Option>
          	<Option>Virginia</Option>
          	<Option>Washington</Option>
          	<Option>West Virginia</Option>
          	<Option>Wisconsin</Option>
          	<Option>Wyoming</Option>
          </Select>

          <View style={{ height: 20 }}></View>

          <Text>Selected Canada's province: {this.state.canada}</Text>
          <Text>Selected USA's state: {this.state.usa}</Text>

          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Example2', () => Example2);
