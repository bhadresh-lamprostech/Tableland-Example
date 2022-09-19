import "./App.css";
import { connect } from "@tableland/sdk";
import { useState } from "react";
import { Buffer } from "buffer/";
window.Buffer = window.Buffer || Buffer;

function App() {
  const [tableObject, setTableObject] = useState();

  const connect_ = async () => {
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    setTableObject(tableland);
    console.log(tableland);
  };

  const create_creators_question_table = async () => {
    const { name } = await tableObject.create(
      `creators_question_id integer primary key, creators_id integer, question text, option1 text, option2 text, option3 text, option4 text, option5 text, answer text, solution text, primary_tag text, secondary_tags text, nation_list text, added_at int, difficulty_level text, repo_name text, privacy int`, // Table schema definition
      {
        prefix: `creators_question_table`, // Optional `prefix` used to define a human-readable string
      }
    );

    console.log(name);
  };

  const create_creators_assessment_table = async () => {
    const { name } = await tableObject.create(
      `assesment_id integer primary key, creators_id integer, title text, description text, date_time int, fixed_cost int, variable_cost int, duration int, number_of_question int, created_at int, experiance_level int`, // Table schema definition
      {
        prefix: `creators_assesment_table`, // Optional `prefix` used to define a human-readable string
      }
    );

    console.log(name);
  };

  const create_creators_repo_table = async () => {
    const { name } = await tableObject.create(
      `repo_id integer primary key, creator_id integer, repo_name text, description text, visiblity int`, // Table schema definition
      {
        prefix: `creators_repo_table`, // Optional `prefix` used to define a human-readable string
      }
    );

    console.log(name);
  };

  

  const insert_table = async () => {
    const writeRes = await tableObject.write(
      `INSERT INTO Test_table_80001_1368 (id, name) VALUES (1, 'Bobby Tables');`
    );
    console.log(writeRes);
  };

  const insert_creators_questions_table = async (
    tablename,
    creators_id,
    question,
    option1,
    option2,
    option3,
    option4,
    option5,
    answer,
    solution,
    primary_tag,
    secondary_tags,
    nation_list,
    added_at,
    difficulty_level,
    repo_name,
    privacy
  ) => {
    const writeRes = await tableObject.write(
      `INSERT INTO ${tablename} (creators_id,question,option1,option2,option3,option4,option5,answer,solution,primary_tag,secondary_tags,nation_list,added_at,difficulty_level,repo_name,privacy) VALUES (${creators_id},${question},${option1},${option2},${option3},${option4},${option5},${answer},${solution},${added_at},${difficulty_level},${repo_name},${privacy});`
    );
    console.log(writeRes);
  };

  const insert_creators_assessment_table = async (
    tablename,
    creators_id,
    title,
    description,
    date_time,
    fixed_cost,
    variable_cost,
    duration,
    number_of_question,
    created_at,
    experiance_level
  ) => {
    const writeRes = await tableObject.write(
      `INSERT INTO ${tablename} (creators_id,title,description,date_time,fixed_cost,variable_cost,duration,number_of_question,created_at,experiance_level) VALUES (${creators_id},${title},${description},${date_time},${fixed_cost},${variable_cost},${duration},${number_of_question},${created_at},${experiance_level});`
    );
    console.log(writeRes);
  };

  const insert_creators_repo_table = async (
    tablename,
    creator_id,
    repo_name,
    description,
    visiblity
  ) => {
    const writeRes = await tableObject.write(
      `INSERT INTO ${tablename} (creator_id,repo_name,description,visiblity) VALUES (${creator_id},${repo_name},${description},${visiblity});`
    );
    console.log(writeRes);
  };

  const view_creators_questions_table = async () => {
    const readRes = await tableObject.read(
      `SELECT * FROM creators_question_table_80001_2089;`
    );
    console.log(readRes);
  };

  const view_creators_assessment_table = async () => {
    const readRes = await tableObject.read(
      `SELECT * FROM creators_assesment_table_80001_1784;`
    );
    console.log(readRes);
  };

  const view_creators_repo_table = async () => {
    const readRes = await tableObject.read(
      `SELECT * FROM creators_repo_table_80001_1785;`
    );
    console.log(readRes);
  };

  const update_table = async () => {
    const writeRes = await tableObject.write(
      `UPDATE Test_table_80001_1368 SET name='Lajja' WHERE Test_table_80001_1368.id=1;`
    );
    console.log(writeRes);
  };

  const grant_permission = async () => {
    const grantUpdate = await tableObject.write(
      `GRANT UPDATE ON Test_table_80001_1368 TO '0x1c55528F0dE382c2008404993549695Fa6c5520B';`
    );
    console.log(grantUpdate);
  };

  return (
    <div className="App">
      <button onClick={() => connect_()}>Connect</button>
      <button onClick={() => create_creators_question_table()}>
        Create creator's question table
      </button>
      <button onClick={() => create_creators_assessment_table()}>
        Create creator's assessment table
      </button>
      <button onClick={() => create_creators_repo_table()}>
        Create creator's repo table
      </button>
      <button onClick={() => view_creators_questions_table()}>
        View creator's questions table
      </button>
      <button onClick={() => view_creators_assessment_table()}>
        View creator's assessment table
      </button>
      <button onClick={() => view_creators_repo_table()}>
        View creator's repo table
      </button>
      <button onClick={() => insert_table()}>Inser to table</button>
      <button onClick={() => update_table()}>Update the table</button>
      <button onClick={() => grant_permission()}>Grant Permission</button>
    </div>
  );
}

export default App;

//creators_question_table_80001_1783
//creators_assesment_table_80001_1784
//creators_repo_table_80001_1785