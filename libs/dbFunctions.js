import User from "../models/User";
import Person from "../models/Person";
import Info from "../models/Info";

// get the  data of a user from the database to do more, e.g notificaton emails
export async function getUser(id) {
  const user = await User.findById({ _id: id }).catch((e) => {
    console.log(e);
  });
  return user;
}

export async function getPerson(id) {
  const person = await Person.findById({ _id: id }).catch((e) => {
    console.log(e);
  });

  return person;
}

// Populate USer
// Get User document with list of persons
export async function getUserWithPersons(id) {
  const user = await User.findById({ _id: id })
    .populate("persons")
    .catch((e) => {
      console.log(e);
    });
  return user;
}

// Get User with list of reports (Info)
export async function getUserWithReports(id) {
  const user = await User.findById({ _id: id })
    .populate("infoList")
    .catch((e) => {
      console.log(e);
    });

  return user;
}

// Get USer and all associated documents
export async function getAllUserDocs(id) {
  const user = await User.findById({ _id: id })
    .populate("persons infoList")
    .catch((e) => {
      console.log(e);
    });

  return user;
}

//-------Populate  Person operations--------

// Get Person record with Creator doc
export async function getPersonWithCreator(id) {
  const person = await Person.findById({ _id: id })
    .populate("creatorId")
    .catch((e) => {
      console.log(e);
    });

  return person;
}

// Get Person record with all associated reports
export async function getPersonWithReports(id) {
  const person = await Person.findById({ _id: id })
    .populate("infoList")
    .catch((e) => {
      console.log(e);
    });
  return person;
}

// Get Person record with all associated reports and creator documents
export async function getAllPersonRecords(id) {
  const person = await Person.findById({ _id: id })
    .populate("creatorId infoList")
    .catch((e) => {
      console.log(e);
    });

  return person;
}

// ------------------------------------------//

// -----------INFO OPERATIONS---------------//
// Get Info With Creator
export async function getInfoWithCreator(id) {
  const report = await Info.findById({ _id: id })
    .populate("creatorId")
    .catch((e) => {
      console.log(e);
    });
  return report;
}

// get Info with Person record
export async function getInfoWithPerson(id) {
  const report = await Info.findById({ _id: id })
    .populate("creatorId")
    .catch((e) => {
      console.log(e);
    });

  return report;
}
//
