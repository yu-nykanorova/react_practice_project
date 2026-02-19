type ModuleItemProps = {
    module: string;
}

export const ModuleItem  = ({module}: ModuleItemProps) => {
    return (
        <li>
            {module}
        </li>
    );
};
