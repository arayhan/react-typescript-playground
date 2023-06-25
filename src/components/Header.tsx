type Props = {
  title: string;
  description: string;
};

const Header = (props: Props) => {
  const { title, description } = props;

  return (
    <div className="bg-slate-700 py-32">
      <div className="container text-white space-y-2">
        <div className="font-bold text-4xl">{title}</div>
        {description && <div>{description}</div>}
      </div>
    </div>
  );
};

export default Header;
