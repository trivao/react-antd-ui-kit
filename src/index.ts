/**
 * We're importing the reset CSS from Ant Design.
 * This is a decision we made to ensure our own styles are applied more consistently by resetting the default styles of Ant Design components.
 */
import "antd/dist/reset.css";

/**
 * We're importing the SCSS file containing Tailwind CSS styles.
 * This is necessary because we decided to use Tailwind CSS in our project.
 */
import "./styles/tailwind.scss";

/**
 * We're directly exporting components from the Ant Design library.
 * This is a choice we made because we believe it's more efficient to use these components directly from Ant Design rather than re-implementing them ourselves.
 */
export {
    Avatar,
    Badge,
    Drawer,
    Modal,
    Spin,
    Tag,
    Timeline,
    Tooltip
} from "antd";

/**
 * We're re-exporting type definitions (interfaces/types) from the Ant Design library.
 * This allows consumers of our component library to use these types directly
 * when working with Ant Design components that we've also re-exported or are using internally.
 * This improves type safety and developer experience by providing type hints and validation.
 */
export type {
    AvatarProps,
    BadgeProps,
    DrawerProps,
    ModalProps,
    SpinProps,
    TagProps,
    TimelineProps,
    TimelineItemProps,
    TooltipProps
} from "antd";

/**
 * We're exporting the components we created.
 * These components are pieces we developed to meet the specific needs of our project and form the foundation of our library.
 */
export * from "./components/Button";
export * from "./components/Input";

/**
 * We're exporting other components here...
 * For example:
    * export * from "./components/Card";
    * export * from "./components/Form";
    * export * from "./components/Table";
 * This section is reserved for components we plan to add in the future to expand our library and provide a more comprehensive component set.
 *
 *
 * In summary, this file allows us to export the components we'll use in our project from a central location. This makes our code more organized and manageable.
 * We can import both our own components and the components we want to use directly from Ant Design from the same place.
 *
 * This approach is a strategy we determined in accordance with our project's overall architecture and coding standards.
 */