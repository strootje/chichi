import { Table, TableProps } from 'chichi-base';
import { h } from 'preact';
import { checks } from '../../../helpers/Controls';

export default {
	title: 'Base/Elements/Table',
	component: Table,
	argTypes: {
		styles: {
			name: 'Styles',
			defaultValue: [],
			control: {
				type: 'inline-check',
				options: ['bordered', 'striped', 'narrow', 'hoverable', 'fullwidth']
			}
		}
	}
};

interface StoryProps {
	styles: [];
}

export const Basic = ({ styles, ...props }: (TableProps & StoryProps)) => (
	<Table {...props} {...checks(styles)}>
		<Table.Head>
			<Table.Row>
				<Table.HeaderCell><abbr title="Position">Pos</abbr></Table.HeaderCell>
				<Table.HeaderCell>Team</Table.HeaderCell>
				<Table.HeaderCell><abbr title="Played">Pld</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Won">W</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Drawn">D</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Lost">L</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Goals for">GF</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Goals against">GA</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Goal Difference">GD</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Points">Pts</abbr></Table.HeaderCell>
				<Table.HeaderCell>Qualification or relegation</Table.HeaderCell>
			</Table.Row>
		</Table.Head>

		<Table.Foot>
			<Table.Row>
				<Table.HeaderCell><abbr title="Position">Pos</abbr></Table.HeaderCell>
				<Table.HeaderCell>Team</Table.HeaderCell>
				<Table.HeaderCell><abbr title="Played">Pld</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Won">W</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Drawn">D</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Lost">L</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Goals for">GF</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Goals against">GA</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Goal Difference">GD</abbr></Table.HeaderCell>
				<Table.HeaderCell><abbr title="Points">Pts</abbr></Table.HeaderCell>
				<Table.HeaderCell>Qualification or relegation</Table.HeaderCell>
			</Table.Row>
		</Table.Foot>

		<Table.Body>
			<Table.Row>
				<Table.HeaderCell>1</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>23</Table.Cell>
				<Table.Cell>12</Table.Cell>
				<Table.Cell>3</Table.Cell>
				<Table.Cell>68</Table.Cell>
				<Table.Cell>36</Table.Cell>
				<Table.Cell>+32</Table.Cell>
				<Table.Cell>81</Table.Cell>
				<Table.Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>2</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>20</Table.Cell>
				<Table.Cell>11</Table.Cell>
				<Table.Cell>7</Table.Cell>
				<Table.Cell>65</Table.Cell>
				<Table.Cell>36</Table.Cell>
				<Table.Cell>+29</Table.Cell>
				<Table.Cell>71</Table.Cell>
				<Table.Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>3</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>19</Table.Cell>
				<Table.Cell>13</Table.Cell>
				<Table.Cell>6</Table.Cell>
				<Table.Cell>69</Table.Cell>
				<Table.Cell>35</Table.Cell>
				<Table.Cell>+34</Table.Cell>
				<Table.Cell>70</Table.Cell>
				<Table.Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></Table.Cell>
			</Table.Row>
			<Table.Row selected>
				<Table.HeaderCell>4</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>19</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>10</Table.Cell>
				<Table.Cell>71</Table.Cell>
				<Table.Cell>41</Table.Cell>
				<Table.Cell>+30</Table.Cell>
				<Table.Cell>66</Table.Cell>
				<Table.Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>5</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>19</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>10</Table.Cell>
				<Table.Cell>49</Table.Cell>
				<Table.Cell>35</Table.Cell>
				<Table.Cell>+14</Table.Cell>
				<Table.Cell>66</Table.Cell>
				<Table.Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>6</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>18</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>11</Table.Cell>
				<Table.Cell>59</Table.Cell>
				<Table.Cell>41</Table.Cell>
				<Table.Cell>+18</Table.Cell>
				<Table.Cell>63</Table.Cell>
				<Table.Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>7</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>16</Table.Cell>
				<Table.Cell>14</Table.Cell>
				<Table.Cell>8</Table.Cell>
				<Table.Cell>65</Table.Cell>
				<Table.Cell>51</Table.Cell>
				<Table.Cell>+14</Table.Cell>
				<Table.Cell>62</Table.Cell>
				<Table.Cell>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>8</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>16</Table.Cell>
				<Table.Cell>12</Table.Cell>
				<Table.Cell>10</Table.Cell>
				<Table.Cell>63</Table.Cell>
				<Table.Cell>50</Table.Cell>
				<Table.Cell>+13</Table.Cell>
				<Table.Cell>60</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>9</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>14</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>15</Table.Cell>
				<Table.Cell>41</Table.Cell>
				<Table.Cell>55</Table.Cell>
				<Table.Cell>−14</Table.Cell>
				<Table.Cell>51</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>10</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>12</Table.Cell>
				<Table.Cell>14</Table.Cell>
				<Table.Cell>12</Table.Cell>
				<Table.Cell>59</Table.Cell>
				<Table.Cell>53</Table.Cell>
				<Table.Cell>+6</Table.Cell>
				<Table.Cell>50</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>11</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>11</Table.Cell>
				<Table.Cell>14</Table.Cell>
				<Table.Cell>13</Table.Cell>
				<Table.Cell>59</Table.Cell>
				<Table.Cell>55</Table.Cell>
				<Table.Cell>+4</Table.Cell>
				<Table.Cell>47</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>12</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>12</Table.Cell>
				<Table.Cell>11</Table.Cell>
				<Table.Cell>15</Table.Cell>
				<Table.Cell>42</Table.Cell>
				<Table.Cell>52</Table.Cell>
				<Table.Cell>−10</Table.Cell>
				<Table.Cell>47</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>13</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>12</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>17</Table.Cell>
				<Table.Cell>40</Table.Cell>
				<Table.Cell>50</Table.Cell>
				<Table.Cell>−10</Table.Cell>
				<Table.Cell>45</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>14</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C." title="West Bromwich Albion F.C.">West Bromwich Albion</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>10</Table.Cell>
				<Table.Cell>13</Table.Cell>
				<Table.Cell>15</Table.Cell>
				<Table.Cell>34</Table.Cell>
				<Table.Cell>48</Table.Cell>
				<Table.Cell>−14</Table.Cell>
				<Table.Cell>43</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>15</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal Palace</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>11</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>18</Table.Cell>
				<Table.Cell>39</Table.Cell>
				<Table.Cell>51</Table.Cell>
				<Table.Cell>−12</Table.Cell>
				<Table.Cell>42</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>16</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC Bournemouth</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>11</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>18</Table.Cell>
				<Table.Cell>45</Table.Cell>
				<Table.Cell>67</Table.Cell>
				<Table.Cell>−22</Table.Cell>
				<Table.Cell>42</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>17</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a></Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>12</Table.Cell>
				<Table.Cell>17</Table.Cell>
				<Table.Cell>48</Table.Cell>
				<Table.Cell>62</Table.Cell>
				<Table.Cell>−14</Table.Cell>
				<Table.Cell>39</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>18</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C." title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
				</Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>10</Table.Cell>
				<Table.Cell>19</Table.Cell>
				<Table.Cell>44</Table.Cell>
				<Table.Cell>65</Table.Cell>
				<Table.Cell>−21</Table.Cell>
				<Table.Cell>37</Table.Cell>
				<Table.Cell>Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.HeaderCell>19</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich City</a> <strong>(R)</strong>
				</Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>9</Table.Cell>
				<Table.Cell>7</Table.Cell>
				<Table.Cell>22</Table.Cell>
				<Table.Cell>39</Table.Cell>
				<Table.Cell>67</Table.Cell>
				<Table.Cell>−28</Table.Cell>
				<Table.Cell>34</Table.Cell>
				<Table.Cell>Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a></Table.Cell>   </Table.Row>
			<Table.Row>
				<Table.HeaderCell>20</Table.HeaderCell>
				<Table.Cell><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a> <strong>(R)</strong>
				</Table.Cell>
				<Table.Cell>38</Table.Cell>
				<Table.Cell>3</Table.Cell>
				<Table.Cell>8</Table.Cell>
				<Table.Cell>27</Table.Cell>
				<Table.Cell>27</Table.Cell>
				<Table.Cell>76</Table.Cell>
				<Table.Cell>−49</Table.Cell>
				<Table.Cell>17</Table.Cell>
				<Table.Cell>Relegation to the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship" title="2016–17 Football League Championship">Football League Championship</a></Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table>
);

export const WithContainer = ({ styles, ...props }: (TableProps & StoryProps)) => (
	<Table.Container>
		<Table {...props} {...checks(styles)}>
			{Array.apply(null, Array(5)).map((_, i) => (
				<Table.Row>{Array.apply(null, Array(100)).map((_, j) => (<Table.Cell>{(i + 1) * (j + 1)}</Table.Cell>))}</Table.Row>
			))}
		</Table>
	</Table.Container>
);
