import * as React from 'react';

export const StateContext = React.createContext({});

export type State = {
  jobs: any[],
  category: string,
  subcategory: string,
  subsubcategory: string,
  stats: any,
};

type Props = {
  initialState: State,
  children: React.Node,
};

// TODO: reducer if needed
export const StateProvider = ({ initialState, children }: Props) => (
  <StateContext.Provider value={initialState}>{children}</StateContext.Provider>
);

export const useStateValue = () => React.useContext(StateContext);
