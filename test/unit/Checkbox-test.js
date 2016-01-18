import React from 'react';
import { shallow } from 'enzyme'
import { assert } from 'chai';

import NowCheckbox from '../../src/components/Checkbox/Checkbox.react';

describe('Checkbox component', function() {
    it('should display a checkbox element', function() {
        var renderedComponent = shallow(<NowCheckbox/>);
        var component = renderedComponent.find('.now-checkbox');
        assert.ok(component);
    });

    it('should add addtional classes to the label', function(){
        var checkboxWithClass = shallow(<NowCheckbox classes="extraClass"/>);
        var renderedCheckbox = checkboxWithClass.find('label');
        console.log('renderedCheckbox')

        assert.equal(renderedCheckbox.props().className, "now-checkbox extraClass");
    });

    it('should not add addtional classes to the input', function(){
        var checkboxWithClass = shallow(<NowCheckbox classes="extraClass"/>);
        var renderedCheckbox = checkboxWithClass.find('input');

        assert.equal(renderedCheckbox.props().className, null);
    });

    it('should add any additional props to the input', function(){
        var checkboxWithAdditionalProp = shallow(<NowCheckbox name="name"/>);
        var renderedCheckbox = checkboxWithAdditionalProp.find('input');

        assert.equal(renderedCheckbox.props().name, "name");
    });

    it('should not add any additional props to the label', function(){
        var checkboxWithAdditionalProp = shallow(<NowCheckbox name="name"/>);
        var renderedCheckbox = checkboxWithAdditionalProp.find('label');

        assert.equal(renderedCheckbox.props().name, null);
    });

    it('should render its children', function() {
        var checkboxWithChildren = shallow(
            <NowCheckbox>Checkbox 1</NowCheckbox>
        );
        var renderedCheckbox = checkboxWithChildren.find('.now-checkbox');

        assert.equal(renderedCheckbox.text(), "Checkbox 1");
    });

    it('should check the checkbox if it is passed as a prop', function(){
        var checkboxWithProp = shallow(
            <NowCheckbox checked={true}>Checkbox 1</NowCheckbox>
        );
        var renderedCheckboxLabel = checkboxWithProp.find('label');
        var renderedCheckboxInput = checkboxWithProp.find('input');

        assert.equal(renderedCheckboxLabel.props().className, "now-checkbox checked");
        assert.equal(renderedCheckboxInput.props().checked, true);
    });

    it('should add disabled class when disabled is passed as a prop', function(){
        var checkboxWithDisabled = shallow(<NowCheckbox disabled />);
        var disabledCheckboxLabel = checkboxWithDisabled.find('label');
        var disabledCheckboxInput = checkboxWithDisabled.find('input');

        assert.equal(disabledCheckboxLabel.props().className, "now-checkbox disabled");
        assert.equal(disabledCheckboxInput.props().disabled, true);
    })

});
