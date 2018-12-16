-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 16 Décembre 2018 à 18:45
-- Version du serveur :  5.6.17-log
-- Version de PHP :  7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `questionnairedonutsasso`
--

-- --------------------------------------------------------

--
-- Structure de la table `aspectsdonuts`
--

DROP TABLE IF EXISTS `aspectsdonuts`;
CREATE TABLE IF NOT EXISTS `aspectsdonuts` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `importance` bigint(11) NOT NULL,
  `valence` varchar(4) NOT NULL,
  `uniqueIdAspect` varchar(255) NOT NULL,
  `date_time_aspect` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `emaildonuts`
--

DROP TABLE IF EXISTS `emaildonuts`;
CREATE TABLE IF NOT EXISTS `emaildonuts` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `date_time_email` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `formdonuts`
--

DROP TABLE IF EXISTS `formdonuts`;
CREATE TABLE IF NOT EXISTS `formdonuts` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `uniqueIdFormUser` varchar(255) NOT NULL,
  `date_time_form` datetime NOT NULL,
  `souhaitUser` varchar(255) NOT NULL,
  `isOperationUser` varchar(4) NOT NULL,
  `dateOperationUser` date DEFAULT NULL,
  `poidsPerduUser` bigint(11) NOT NULL,
  `satisfactionOperationUser` varchar(255) NOT NULL,
  `sexe` varchar(6) NOT NULL,
  `age` bigint(11) NOT NULL,
  `taille` bigint(11) NOT NULL,
  `poids` bigint(11) NOT NULL,
  `situationFamilialeUser` varchar(255) NOT NULL,
  `isEnfantsUser` varchar(4) NOT NULL,
  `nbreEnfantsUser` bigint(11) NOT NULL,
  `connaissance` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
