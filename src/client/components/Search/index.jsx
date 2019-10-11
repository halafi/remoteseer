import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import mq from '../../services/mediaQuery';

import { TAG_LINKS } from '../../services/jobs/tags';

const SearchOverlay = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const Input = styled.input`
  position: relative;
  z-index: 3;
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: 400;
  appearance: none;
  border: 0;
  font-size: 18px;
  padding: 8px 8px 8px 40px;
  outline: none;
  text-align: left;
  color: #323232;
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  background-image: url(/images/icons/search.svg);
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: 12px center;
  ${mq.TABLET`
    font-size: 22px;
    padding: 12px 12px 12px 54px;
    background-size: 28px;
    background-position: 16px center;
  `};
`;

const Container = styled.div`
  position: relative;
`;

const Suggestions = styled(Flex)`
  position: absolute;
  z-index: 3;
  background-color: white;
  top: 78px;
  left: 0;
  border-radius: 3px;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 100%;
  min-height: 179px;
  max-height: 358px;
  overflow-y: auto;
  ${mq.TABLET`
    left: 247px;
    width: 297px;
  `};
`;

const Suggestion = styled.div`
  color: initial;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
  padding: 12px 16px;
  background-color: ${({ selected }) => (selected ? '#f5f5f5' : '')};
  transition: background-color 0.2s ease;
  :not(:last-child) {
    border-bottom: 1px solid rgb(239, 239, 239);
  }
`;

const Message = styled(Flex)`
  height: 211px;
  text-align: center;
`;

class Search extends React.PureComponent<> {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      focused: false,
      cursor: 0,
      disabled: false,
    };
  }

  handleClickOut = () => {
    const { value, suggestions } = this.state;
    this.setState({
      focused: false,
      suggestions: value === '' ? [] : suggestions,
      cursor: 0,
    });
  };

  handleClickIn = () => {
    this.setState({
      focused: true,
      cursor: 0,
    });
  };

  handleSelect = () => {
    const { cursor, suggestions } = this.state;
    this.setState({
      value: suggestions[cursor - 1],
      focused: false,
      cursor: 0,
      disabled: true,
    });
    window.open(TAG_LINKS[suggestions[cursor - 1]], '_self');
  };

  handleKeyDown = ev => {
    const { cursor, suggestions, value } = this.state;

    if (ev.keyCode === 13 && cursor !== 0) {
      // enter
      this.setState({
        value: suggestions[cursor - 1],
        focused: false,
        cursor: 0,
        disabled: true,
      });
      ev.preventDefault();
      window.open(TAG_LINKS[suggestions[cursor - 1]], '_self');
    } else if (ev.keyCode === 38 && cursor > 1) {
      ev.preventDefault();
      this.setState({
        cursor: cursor - 1,
      });
    } else if (ev.keyCode === 40 && cursor < suggestions.length) {
      ev.preventDefault();
      // keydown
      this.setState({
        cursor: cursor + 1,
      });
    } else if (ev.keyCode === 40 && value === '') {
      ev.preventDefault();
      this.setState({
        suggestions: Object.keys(TAG_LINKS),
      });
    } else if (ev.keyCode === 38 && value === '') {
      this.setState({
        suggestions: [],
      });
    }
  };

  handleCursorChange = cur => {
    this.setState({ cursor: cur });
  };

  handleChange = ev => {
    const inputValue = ev.target.value.trim().toLowerCase();

    this.setState({
      focused: true,
      value: ev.target.value,
      suggestions: inputValue
        ? Object.keys(TAG_LINKS).filter(
            tag => tag.toLowerCase().slice(0, inputValue.length) === inputValue,
          )
        : [],
      cursor: 0,
    });
  };

  render() {
    const { value, suggestions, focused, cursor, disabled } = this.state;
    return (
      <>
        {focused && <SearchOverlay onClick={this.handleClickOut} />}
        <Container>
          <Input
            autoComplete="off"
            type="text"
            value={value}
            onFocus={this.handleClickIn}
            onChange={this.handleChange}
            placeholder="search jobs"
            onKeyDown={this.handleKeyDown}
            disabled={disabled}
          />
          {Boolean(value.length || suggestions.length) && focused && (
            <Suggestions flexDirection="column">
              {suggestions.length ? (
                suggestions.sort().map((x, i) => (
                  <Suggestion
                    key={x}
                    onMouseEnter={() => this.handleCursorChange(i + 1)}
                    selected={i + 1 === cursor}
                    onClick={this.handleSelect}
                  >
                    {x}
                  </Suggestion>
                ))
              ) : (
                <Message justifyContent="center" alignItems="center">
                  <div>
                    No tag found{' '}
                    <span role="img" aria-label="crying emoji">
                      😿
                    </span>
                  </div>
                </Message>
              )}
            </Suggestions>
          )}
        </Container>
      </>
    );
  }
}
export default Search;
