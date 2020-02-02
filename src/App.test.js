import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it('renders without crash', () => {
    wrapper = mount(<App />);
    expect(wrapper.length).toEqual(1);
  });
  it('all sections render properly', () => {
    wrapper = mount(<App />);
    expect(wrapper.find('[data-test="form"]').length).toEqual(1);
    expect(wrapper.find('[data-test="result-box"]').length).toEqual(1);
  });
  it('should produce word by giving digit input', () => {
    wrapper = mount(<App />);
    wrapper.find('[data-test="form"] input').simulate('change', {
      target: {
        name: 'digit',
        value: 42
      }
    });
    wrapper.find('[data-test="form"]').simulate('submit');
    expect(wrapper.find('[data-test="result-box"]').text()).toEqual(
      'forty-two'
    );
  });
  it('should display validation error on entering alphabats', () => {
    wrapper = mount(<App />);
    wrapper.find('[data-test="form"] input').simulate('change', {
      target: {
        name: 'digit',
        value: 'asd'
      }
    });
    expect(wrapper.find('[data-test="validation-error"]').text()).toEqual(
      'Only numbers are allowed!'
    );
  });
  it('should hide validation error on entering proper digit', () => {
    wrapper = mount(<App />);
    wrapper.find('[data-test="form"] input').simulate('change', {
      target: {
        name: 'digit',
        value: 'asd'
      }
    });
    expect(wrapper.find('[data-test="validation-error"]').text()).toEqual(
      'Only numbers are allowed!'
    );
    wrapper.find('[data-test="form"] input').simulate('change', {
      target: {
        name: 'digit',
        value: '42'
      }
    });
    expect(wrapper.find('[data-test="validation-error"]').length).toEqual(0);
  });
  it('should display validation error on submitting empty form', () => {
    wrapper = mount(<App />);
    wrapper.find('[data-test="form"]').simulate('submit');
    expect(wrapper.find('[data-test="validation-error"]').text()).toEqual(
      'Please enter a number!'
    );
  });
});
