import React from 'react';
import { shallow } from 'enzyme'
import { assert } from 'chai';

import NowDropdown from './Dropdown.react';

describe('Dropdown component', () => {

    it('should display a dropdown element', () => {
        var renderedComponent = shallow(<NowDropdown/>);
        var component = renderedComponent.find('.now-dropdown');
        assert.ok(component);
    });


    it('should add addtional classes', function(){
        var dropdownWithClass = shallow(<NowDropdown classes="extraClass"/>);
        var renderedDropdown = dropdownWithClass.find('.extraClass');

        assert.ok(renderedDropdown);
    })

    it('should add any addtionalitional props', function(){
        var dropdownWithAdditionalProp = shallow(<NowDropdown id="anId"/>);
        var renderedDropdown = dropdownWithAdditionalProp.find('.now-dropdown');

        assert.equal(renderedDropdown.props().id, "anId");
    })

    it('should render its children', function() {
        var dropdownWithChildren = shallow(
            <NowDropdown>
                <option value="value">Value</option>
                <option value="value2">Value2</option>
            </NowDropdown>
        );
        var renderedDropdown = dropdownWithChildren.find('.now-dropdown');
        assert.equal(renderedDropdown.props().children.length, 2);
    });
});
