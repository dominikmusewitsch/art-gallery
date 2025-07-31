import ArtList from "@/components/ArtList";
// import useSWR from "swr";

export default function Gallery({ data }) {
  // const {
  //   data: data,
  //   error,
  //   isLoading,
  // // } = useSWR("https://example-apis.vercel.app/api/art");

  // if (error) return <p>Fehler beim Laden der Daten.</p>;
  // if (isLoading) return <p>Lade...</p>;

  return (
    <>
      <ArtList data={data} />
    </>
  );
}
