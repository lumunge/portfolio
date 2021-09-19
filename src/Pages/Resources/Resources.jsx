import {Typography} from '@material-ui/core';

const Resources = () => {
	return (
        <div>
			<br /><br /><br /><br /><br />
			<Typography variant="h4">Articles</Typography>
            <a href="https://www.cprogramming.com/whatdoesittake.html"> What it takes to be a programmer </a>
            <a href="https://www.cprogramming.com/whyprogram.html"> Why program </a>
            <a href="https://www.cprogramming.com/tutorial/thinking.html"> Thinking like a programmer </a>
			<Typography variant="h4">Interesting Videos</Typography>
            <a href="https://www.youtube.com/watch?v=nLmhmB6NzcM">Solving 0/1 Knapsack Problem </a>
			<Typography variant="h4">Books</Typography>
            <a href="#!"> Mastery - Robert Greene </a>
            <a href="#!"> The Master Algorithm </a>
			<Typography variant="h4">Papers</Typography>
        </div>
	);
};

export default Resources;
