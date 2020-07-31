import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  // ============

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>
      

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
// import React, { useState, useEffect } from 'react';
// import PageDefault from '../../../components/PageDefault';
// import FormField from '../../../components/FormField';
// import Button from '../../../components/Button';

// function CadastroCategoria() {
//   const valoresIniciais = {
//     nome: '',
//     descricao: '',
//     cor: '',
//   };

//   const [categorias, setCategorias] = useState([]);
//   const [nomeDaCategoria, setNomeDaCategoria] = useState(['Valor Inicial']);
//   const [values, setValues] = useState(valoresIniciais);


//   function setValue(chave, valor) {
//     setValues({
//       ...values,
//       [chave]: valor,

//     });
//   }

//   function handleChange(infosDoEvento) {
//     // const {getAttribute,value} = infosDoEvento.target;
//     setValue(infosDoEvento.target.getAttribute('name'),
//       infosDoEvento.target.value);
//     // WUOHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//     // WUOHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//     // WUOHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//     // WUOHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
//     // eslint-disable-next-line no-unused-expressions
//     setNomeDaCategoria(infosDoEvento.target.value);
//     // setNomeDaCategoria(infosDoEvento.target.value);
//   }

//   useEffect(() => {
//     if(window.location.href.includes('localhost')) {
//       const URL = 'http://localhost:3000/categorias'; 
//       fetch(URL)
//        .then(async (respostaDoServer) =>{
//         if(respostaDoServer.ok) {
//           const resposta = await respostaDoServer.json();
//           setCategorias(resposta);
//           return; 
//         }
//         throw new Error('Não foi possível pegar os dados');
//        })
//     }    
//   }, []);

//   return (

//     <PageDefault>
//       <h1>
//         Cadastro de Categoria:
//         {' '}
//         {nomeDaCategoria}
//         {' '}
//       </h1>

//       {/* style={{background: nomeDaCategoria }} */}

//       <form onSubmit={function handleSubmit(infosDoEvento) {
//         infosDoEvento.preventDefault();
//         setCategorias([
//           ...categorias,
//           nomeDaCategoria,
//         ]);

//         setValues(valoresIniciais);
//       }}
//       >

//         {/* <div> */}

//         <FormField
//           label="Nome da categoria"
//           type=""
//           name=""
//           value={values.nome}
//           onChange={handleChange}
//         />

//         <FormField
//           label="Descricao"
//           type="text"
//           name=""
//           value={values.descricao}
//           onChange={handleChange}
//         />
//         {/*
// <FormField
//       type="color"
//       name="cor"
//       value= {values.descricao}
//       onChange= {handleChange}
//     /> */}
//         {/* <div>
//           <label>
//             Descricao:
//             <textarea
//               type="text"
//               value={values.descricao}
//               name="descricao"
//               onChange={handleChange}
//             />

//           </label>
//         </div> */}

//         <FormField
//           label="Cor"
//           type="color"
//           name=""
//           value={values.cor}
//           onChange={handleChange}
//         />

//         {/* /* <label>
//         Cor:
//         <input type="color"
//               value = {values.cor}
//               name="cor"
//               onChange= {handleChange}
//               />

//       </label>

//               </div> */}

//         <Button>
//           Cadastrar
//         </Button>
//       </form>
//       {categorias.length === 0 && (<div>
//           Cargando..Mierda
//         </div>)}
//       <ul>
//         {categorias.map((categoria, indice) => (
//           // eslint-disable-next-line react/no-array-index-key
//           <li key={`${categoria}${indice}`}>
//             {categoria.nome}
//           </li>
//         ))}

//       </ul>
//     </PageDefault>
//   );

// export default CadastroCategoria;
