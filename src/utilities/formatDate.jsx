    // this function formats the date so that it appears mm/dd/yyyy as per the mockup
    export default function formatDate(videoTimestamp) {
       
        const date = new Date(videoTimestamp);

        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        let yyyy = date.getFullYear();

        // adds a "0" ahead of the month if the month is between 1-9
        if (mm < 10) {
            mm = `0${mm}`
        }

        // adds a "0" ahead of the day if the day is between 1-9
        if (dd < 10) {
            dd = `0${dd}`
        }

        const commentDate = `${mm}/${dd}/${yyyy}`;
    
        return commentDate;
    }