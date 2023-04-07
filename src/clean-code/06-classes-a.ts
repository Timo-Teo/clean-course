-(() => {

    type Gender = 'M' | 'F';

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, bithdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = bithdate
        }
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        'user/home',
        '/home',
        'email.conm',
        'admin',
        'timoteo',
        "M",
        new Date('1998-10-10')
    )

    console.log({ userSettings })

})();