interface Props {
  children: JSX.Element;
  wrapper: (children: JSX.Element) => JSX.Element;
  condition: boolean;
}

const ConditionalWrapper = ({
  children,
  wrapper,
  condition,
}: Props): JSX.Element => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
