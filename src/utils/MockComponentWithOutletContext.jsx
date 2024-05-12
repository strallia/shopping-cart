import PropTypes from "prop-types";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";

export const MockComponentWithOutletContext = ({ context, children }) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context} />}>
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

MockComponentWithOutletContext.propTypes = {
  context: PropTypes.shape({
    itemsData: PropTypes.arrayOf(PropTypes.object),
  }),
  children: PropTypes.element,
};
