import Icon from "/src/icons/Icon";

export const validation = (data, type) => {
    const errors = {};

    if(type === "signup") {
        if(!data.first_name.trim()) {
            errors.first_name = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن نام الزامی است.</div>
            </span>;
        } else {
            delete errors.first_name;
        };

        if(!data.last_name.trim()) {
            errors.last_name = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن نام خانوادگی الزامی است.</div>
            </span>;
        } else {
            delete errors.last_name;
        };

        if(!data.username) {
            errors.username = <span>
                <Icon icon="alert-circle" />
                <div>باید یک نام کاربری وارد کنید.</div>
            </span>;
        } else {
            delete errors.username;
        };

        if(!data.email) {
            errors.email = <span>
                <Icon icon="alert-circle" />
                <div>باید یک ایمیل معتبر وارد کنید.</div>
            </span>;
        } else {
            delete errors.email;
        };

        if(!data.password) {
            errors.password = <span>
                <Icon icon="alert-circle" />
                <div>باید یک رمزعبور وارد کنید.</div>
            </span>;
        } else if(data.password.length < 8) {
            errors.password = <span>
                <Icon icon="alert-circle" />
                <div>رمزعبور شما باید حداقل از 8 کارکتر تشکیل شده باشد.</div>
            </span>;
        } else {
            delete errors.password;
        };

        if(!data.birth_date) {
            errors.birth_date = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن تاریخ تولد الزامی است.</div>
            </span>;
        } else {
            delete errors.birth_date;
        };
    } else if(type === "login") {
        if(!data.username) {
            errors.username = <span>
                <Icon icon="alert-circle" />
                <div>باید نام کاربری خود را وارد کنید.</div>
            </span>;
        } else {
            delete errors.username;
        };

        if(!data.password) {
            errors.password = <span>
                <Icon icon="alert-circle" />
                <div>باید رمزتان را وارد کنید.</div>
            </span>;
        } else {
            delete errors.password;
        };
    } else if(type === "jobs") {
        if(!data.title.trim()) {
            errors.title = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن عنوان الزامی است.</div>
            </span>;
        } else {
            delete errors.title;
        };

        if(!data.sector) {
            errors.sector = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن بخش الزامی است.</div>
            </span>;
        } else {
            delete errors.sector;
        };

        if(!data.salary) {
            errors.salary = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن حقوق الزامی است.</div>
            </span>;
        } else {
            delete errors.sector;
        };

        if(!data.location.trim()) {
            errors.location = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن شهر الزامی است.</div>
            </span>;
        } else {
            delete errors.location;
        };

        if(!data.job_type) {
            errors.job_type = <span>
                <Icon icon="alert-circle" />
                <div>وارد کردن نوع شغل الزامی است.</div>
            </span>;
        } else  {
            delete errors.job_type;
        };
    };

    return errors;
}