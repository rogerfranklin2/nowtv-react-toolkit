import React from 'react'
import { shallow } from 'enzyme'
import { assert }  from 'chai'

import NowRadioButton from './RadioButton.react'

describe('RadioButton component', () => {
    it('should display a radioButton element', () => {
        var renderedComponent = shallow(<NowRadioButton/>);
        var component = renderedComponent.find('.now-radio-button');
        assert.ok(component);
    });

    it('should add addtional classes to the label', () => {
        var radioButtonWithClass = shallow(<NowRadioButton classes="extraClass"/>);
        var renderedRadioButton = radioButtonWithClass.find('label');

        assert.equal(renderedRadioButton.props().className, "now-radio-button extraClass");
    });

    it('should not add addtional classes to the input', () => {
        var radioButtonWithClass = shallow(<NowRadioButton classes="extraClass"/>);
        var renderedRadioButton = radioButtonWithClass.find('input');

        assert.equal(renderedRadioButton.props().className, null);
    });

    it('should add any additional props to the input', () => {
        var radioButtonWithAdditionalProp = shallow(<NowRadioButton name="name"/>);
        var renderedRadioButton = radioButtonWithAdditionalProp.find('input');

        assert.equal(renderedRadioButton.props().name, "name");
    });

    it('should not add any additional props to the label', () => {
        var radioButtonWithAdditionalProp = shallow(<NowRadioButton name="name"/>);
        var renderedRadioButton = radioButtonWithAdditionalProp.find('label');

        assert.equal(renderedRadioButton.props().name, null);
    });

    it('should render its children', () => {
        var radioButtonWithChildren = shallow(
            <NowRadioButton>RadioButton 1</NowRadioButton>
        );
        var renderedRadioButton = radioButtonWithChildren.find('.now-radio-button');

        assert.equal((renderedRadioButton).text(), "RadioButton 1");
    });

    it('should check the radioButton if it is passed as a prop', () => {
        var radioButtonWithProp = shallow(
            <NowRadioButton checked={true}>RadioButton 1</NowRadioButton>
        );
        var renderedRadioButtonLabel = radioButtonWithProp.find('label');
        var renderedRadioButtonInput = radioButtonWithProp.find('input');

        assert.equal(renderedRadioButtonLabel.props().className, "now-radio-button checked");
        assert.equal(renderedRadioButtonInput.props().checked, true);
    });

    it('should add disabled class when disabled is passed as a prop', () => {
        var radioButtonWithDisabled = shallow(<NowRadioButton disabled />);
        var disabledRadioButtonLabel = radioButtonWithDisabled.find('label');
        var disabledRadioButtonInput = radioButtonWithDisabled.find('input');

        assert.equal(disabledRadioButtonLabel.props().className, "now-radio-button disabled");
        assert.equal(disabledRadioButtonInput.props().disabled, true);
    })

});
