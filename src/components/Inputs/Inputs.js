import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { Select } from '@styled-icons/fa-solid';
import "./Inputs.css";


const FilterableSelect = (props) => {
    const { nullable, onChange, disabled, required, onChangeAsObject, className, label, smalltext, data, setData, options, disabledInputs, info, error, name, dropdownWidth, ...rest } = props;
    const [search, setSearch] = useState();
    const [showDropdown, setShowDropdown] = useState(false);
  
    const dropdownAreaRef = useRef();
    const buttonRef = useRef();
    const searchRef = useRef();
  
      const outsideClickListener = event => {
          if (!dropdownAreaRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) { // or use: event.target.closest(selector) === null
            setShowDropdown(false);
            setSearch('');
            removeClickListener();
          }
      }
  
      const removeClickListener = () => {
          document.removeEventListener('click', outsideClickListener);
      }
      const clickButton = () => {
        if (!disabled) {
          if (!showDropdown) {
            setShowDropdown(true);
            document.addEventListener('click', outsideClickListener);
          }
          else {
            setShowDropdown(false)
            setSearch('');
            removeClickListener();
          }
        }
      }
  
      useEffect(() => {
        if (showDropdown) {
          searchRef.current.focus();
        }
      }, [showDropdown])
  
    const handleChange = (data) => {
      setShowDropdown(false);
      removeClickListener();
      setData?.(data);
      onChange?.(data);
  
      const selected = options.find(opt => opt?.id?.toString?.() === data);
      onChangeAsObject?.(selected);
    }
  
    const filteredOptions = useMemo(() => {
      if (!search) return options;
      return options.filter((opt) => {
        return opt.data?.toUpperCase?.().indexOf(search?.toUpperCase()) > -1
      }).sort((a, b) => {
        if (
         a.data?.toUpperCase?.()?.startsWith(search?.toUpperCase()) &&
         !b.data?.toUpperCase?.()?.startsWith(search?.toUpperCase())
        )
          return -1
        return 0;
      })
    }, [options, search])
  
    const OptionsList = ({ options, handleChange }) => {
      let result = [];
  
      options.forEach(opt => {
          result.push(
            <div onClick={() => {handleChange(opt.id)}} className='input-filterable-option' key={opt.id} value={opt.id} style={{ color: 'white' }}>
              {opt.data}
            </div>
          )
  
        
  
      });
  
      return result;
    }
  
    const SelectOptionsList = ({ options }) => {
      let result = [];
      result.push(
        <option key={0} value="">
          - Select -
        </option>
      );
  
      options.forEach(opt => {
  
          result.push(
            <option key={opt.id} value={opt.id} style={{ color: 'white' }}>
              {opt.data}
            </option>
          )
  
        
  
      });
  
      return result;
    }
  
    const displayValue = useMemo(() => {
      const value =  {
        text: options.find(opt => opt?.id?.toString?.() === data?.toString())?.data,
        none: !options.find(opt => opt?.id?.toString?.() === data?.toString())
      }
      return value;
    }, [data, options])
  
    return (
      <div className={`input-outer-container ${className ? className : ''}`}>
        <label className="input-label label-text">
          <span>
            {label}
          </span>
          <span className="startInputs">
            {smalltext}
          </span>
          <span style={{ flexGrow: 1 }}></span>
          <span className="input-error-box">
            {error ? error : "\u00A0"}
          </span>
          <span>
            {typeof info === "function" ? info() : (info ?? "")}
          </span>
        </label>
        <div class="input-filterable-dropdown">
          <select ref={buttonRef} 
          name={name}
          required={required}
          className={"d-flex flex-row justify-content-between input-filterable-button " + (disabled ? 'input-filterable-button-disabled' : '')} style={displayValue.none ? {color: 'white'} : {color: 'grey'}}
          value={data} onMouseDown={(e) => {e.preventDefault(); clickButton();}}
          onKeyDown={(e) => {
            if (!["Tab", "Shift", "Control", "Alt"].includes(e.key)){
              e.preventDefault(); clickButton();
            }
            }}>
            <SelectOptionsList options={options} />
          </select>
          <div ref={dropdownAreaRef} className="input-filterable-dropdown-content" style={  Object.assign(showDropdown ? {display: 'flex'} : {display: 'none'}, dropdownWidth ? {width: dropdownWidth} : {} )  }>
            <div             onKeyDown={(e) => {
                if (e.key === "Escape") clickButton();
              }}
              
              className="input-filterable-search-container" >
              <div width="1rem" style={{color: 'grey', marginLeft: '4px'}}/>
              <input
              ref={searchRef} onChange={(e) => {setSearch(e.target.value)}} value={search} type="text" placeholder="Search.." className="input-filterable-search" />
            </div>
            <div class="input-filterable-options-container" >
              <OptionsList options={filteredOptions} handleChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export { FilterableSelect }