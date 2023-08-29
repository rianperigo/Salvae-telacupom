/*import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/Halu.jpg')} style={styles.PratoImagem} />

      <View style={styles.logoContainer}>
        <Image
          source={require('./images/Halulogo.jpg')}
          style={styles.logoImage}
        />
      </View>
      <Text style={styles.NomeRestaurante}>Halu Esfihas</Text>
      <View style={styles.linha1} />
      <View style={styles.SobreocupomContainer}>
        <Text style={styles.sobreOcupom}>Sobre o cupom</Text>
        <Text style={styles.descricaoCupom}>
          Compre uma Esfiha e ganhe outra
        </Text>
        <Text style={styles.diasvalidos}>Cupom Válido para os dias</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Image
          source={require('./images/checkbox.png')}
          style={styles.checkboxImagem}
        />
      </View>
      <View style={styles.linha2} />
      <View style={styles.InformacoesRestauranteContainer}>
        <Text style={styles.sobreOcupom}>Sobre o cupom</Text>
        <View style={styles.logoWhatsapp}>
          <Image
            source={require('./icons/Whatsapp.png')}
            style={styles.logoWhatsapp}
          />
          <Text style={styles.numerowhatsapp}>(44) 9 9925-3131</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PratoImagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  logoContainer: {
    position: 'absolute',
    top: 150,
    left: 20,
    padding: 5,
    elevation: 5,
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
  },
  NomeRestaurante: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 27,
    marginLeft: 150,
    color: '#134844',
  },
  linha1: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 3,
    marginVertical: 20,
  },
  SobreocupomContainer: {
    margin: 20,
    marginTop: 10,
    color: '#134844',
  },
  sobreOcupom: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#134844',
  },
  descricaoCupom: {
    fontSize: 18,
    lineHeight: 24,
    color: '#134844',
  },
  diasvalidos: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color: '#134844',
  },
  checkboxContainer: {
    position: 'absolute',
    top: 150,
    left: 20,
    padding: 5,
    elevation: 5,
  },
  checkboxImagem: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginTop: 120,
  },
  linha2: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 3,
    marginTop: 70,
  },
  InformacoesRestauranteContainer: {
    margin: 20,
    marginTop: 20,
  },
  informacoes: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#134844',
  },
  logoWhatsapp: {
    width: 25,
    height: 25,
    margin: 5,
    marginTop: 0,
  },
  numerowhatsapp: {
    fontSize: 18,
    lineHeight: 24,
    color: '#134844',
    margin: 0,
    marginTop: 10,
  },
});

export default App;
*/
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  const diasDaSemana = [false, true, true, true, true, true, false];
  const diasAbreviados = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

  const diaStyle = ativo => ({
    width: 45,
    height: 45,
    backgroundColor: ativo ? 'green' : 'gray',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  });
  return (
    <View style={styles.container}>
      <Image source={require('./images/Halu.jpg')} style={styles.PratoImagem} />

      <View style={styles.logoContainer}>
        <Image
          source={require('./images/Halulogo.jpg')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.NomeRestauranteContainer}>
        <View>
          <Text style={styles.NomeRestaurante}>Halu Esfihas</Text>
          <Text style={styles.SubtituloRestaurante}>Esfiharia</Text>
        </View>
        <Image
          source={require('./icons/Pizza.png')}
          style={styles.iconeRestaurante}
        />
      </View>

      <View style={styles.linha1} />
      <View style={styles.SobreocupomContainer}>
        <Text style={styles.sobreOcupom}>Sobre o cupom</Text>
        <Text style={styles.descricaoCupom}>
          Compre uma Esfiha e ganhe outra
        </Text>
        <Text style={styles.diasvalidos}>Cupom Válido para os dias</Text>
      </View>

      <View style={styles.checkboxContainer}>
        {diasDaSemana.map((ativo, index) => (
          <View key={index} style={diaStyle(ativo)}>
            <Text style={styles.diaText}>{diasAbreviados[index]}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.categoriasEntrega}>
        • Presencial, Delivery, Take Away
      </Text>

      <View style={styles.linha2} />
      <View style={styles.InformacoesRestauranteContainer}>
        <Text style={styles.informacoes}>Informações do Restaurante</Text>
        <View style={styles.iconesContainer}>
          <Image
            source={require('./icons/Whatsapp.png')}
            style={styles.logoWhatsapp}
          />
          <Text style={styles.numerowhatsapp}> (44) 9 9925-3131</Text>
        </View>

        <View style={styles.iconesContainer}>
          <Image
            source={require('./icons/instagram.png')}
            style={styles.logoWhatsapp}
          />
          <Text style={styles.numerowhatsapp}> @HaluEsfihas</Text>
        </View>
        <View style={styles.iconesContainer}>
          <Image
            source={require('./icons/localizacao.png')}
            style={styles.logoWhatsapp}
          />
          <Text style={styles.numerowhatsapp}>
            Rua: LojaDoMacarrão, 12, Jardim Alvorada - Maringá - PR
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NomeRestauranteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 0,
  },
  iconeRestaurante: {
    width: 50, // Defina o tamanho do ícone conforme necessário
    height: 50,
    marginRight: 20, // Espaçamento entre o ícone e o texto
    marginLeft: 0,
  },
  PratoImagem: {
    width: '100%',
    height: 175,
    resizeMode: 'cover',
  },
  logoContainer: {
    position: 'absolute',
    top: 120,
    left: 20,
    padding: 5,
    elevation: 5,
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
  },
  NomeRestaurante: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 27,
    marginLeft: 150,
    color: '#134844',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    top: 0,
  },
  SubtituloRestaurante: {
    fontSize: 17,
    color: '#888888',
    marginTop: 5,
    marginLeft: 150,
  },
  linha1: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 3,
    marginVertical: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  SobreocupomContainer: {
    margin: 20,
    marginTop: 0,
    color: '#134844',
  },
  sobreOcupom: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#134844',
  },
  descricaoCupom: {
    fontSize: 18,
    lineHeight: 24,
  },
  diasvalidos: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color: '#134844',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  diaText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoriasEntrega: {
    fontSize: 17,
    marginTop: 10,
    marginLeft: 20,
    color: '#134844',
  },
  linha2: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 3,
    marginTop: 40,
    marginTop: 15,
    marginBottom: 0,
  },
  InformacoesRestauranteContainer: {
    margin: 20,
    marginTop: 20,
  },
  informacoes: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#134844',
  },
  iconesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  logoWhatsapp: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  numerowhatsapp: {
    fontSize: 18,
    lineHeight: 24,
    color: '#134844',
    margin: 0,
  },
});

export default App;
