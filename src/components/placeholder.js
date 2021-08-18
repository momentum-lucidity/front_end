 // pagination based
 const indexOfLastAnnouncement = currentPage * announcementsPerPage;
 const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
 const currentAnnouncements = sortedAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement)

 useEffect((selectedPK) => {
    getAnnouncementDetail(selectedPK)
      .then((data) => setSelectedAnnouncement(data)); 
      console.log(selectedAnnouncement)
  }, [selectedPK, selectedAnnouncement])

  const handleSetAnnouncementData = (event) => {
    setSelectedPK(event.target.value)
    console.log(selectedPK)
  }

  const [selectedPK, setSelectedPK] = useState([])
  const [selectedAnnouncement, setSelectedAnnouncement] = useState([])