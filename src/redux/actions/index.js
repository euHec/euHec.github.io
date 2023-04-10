export const CONTROL_SIDEBAR = 'CONTROL_SIDEBAR';
export const INITIAL_SIDEBAR = 'INITIAL_SIDEBAR';


export const initialSidebar = () => ({
  type: INITIAL_SIDEBAR,
})

export const controlSidebar = (state) => ({
  type: CONTROL_SIDEBAR,
  payload: {
    state,
  }
})